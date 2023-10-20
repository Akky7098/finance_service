import { CurrencyEnum, OrderStatusEnum, PaymentStatusEnum, RefundSpeedEnum } from '../../common-module/utils/enum';
import { IServiceResponse } from '../../common-module/utils/interface';
import ResponseService from '../../common-module/utils/response.handler';
import { IProcessRefundPayload, IRefundPayload, IRefundService } from '../../interfaces/refund.interface';
import { OrderRepository } from '../../repository/order.repository';
import { RefundRepository } from '../../repository/refund.repository';
import { TransactionRepository } from '../../repository/transaction.repository';
import { paymentUtil } from '../../utils/payment/payment';

class RefundService extends ResponseService implements IRefundService {
  constructor(
    private readonly PaymentUtil = paymentUtil,
    private readonly transactionRepository = TransactionRepository,
    private readonly refundRepository = RefundRepository,
    private readonly _orderRepository = OrderRepository,
  ) {
    super();
  }
  // get razor pay payment details by order id
  async processRefund(
    id: string,
    description?: string,
    userId?: string,
    adminUserId?: string,
  ): Promise<IServiceResponse> {
    const order = await this._orderRepository.findById(id);
    if (order?.status != OrderStatusEnum.COMPLETED) {
      throw new Error('Order not found!');
    }
    const transaction = await this.transactionRepository.findOneBy({orderId: order.orderId, status: PaymentStatusEnum.CAPTURED});
    if (transaction?.status != PaymentStatusEnum.CAPTURED) {
      throw new Error('Payment not captured!');
    }
    const dataToRazorPay: IRefundPayload = {
      amount: transaction.amount,
      speed: RefundSpeedEnum.OPTIMUM,
    };
    const initiateRefund = await this.PaymentUtil.initiateRefund(transaction?.transactionId, dataToRazorPay);
    const dataToDb: IProcessRefundPayload = {
      amount: transaction.amount / 100,
      currency: CurrencyEnum[transaction.currency],
      orderId: transaction.orderId,
      refundSpeed: initiateRefund.speed_processed,
      status: initiateRefund.status,
      transactionId: initiateRefund.payment_id,
      userId,
      adminUserId,
      description,
      refundProcessId: initiateRefund.id,
    };
    const storeRefundData = await this.refundRepository.createAndSave(dataToDb);
    return this.serviceResponse(201, storeRefundData || {}, 'success');
  }
}
export const refundService = new RefundService();
