import { NextFunction, Request, Response } from 'express';
import ResponseService from '../../common-module/utils/response.handler';
import { refundService } from './service';
import { ICreateRefund, IRefundController } from '../../interfaces/refund.interface';

class RefundController extends ResponseService implements IRefundController {
  constructor(private readonly service= refundService) {
    super();
  }

    // initiale refund process
    initiateRefund = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const data: Partial<ICreateRefund> = req.body;
        const userId = req.user?.isAdmin ? undefined : req.user?.id;
        const adminUserId = req.user?.isAdmin ? req.user?.id : undefined;
        const response = await this.service.processRefund(req.params.id, data.description, userId, adminUserId);;

      const { statusCode, payload, message } = response;
      this.sendResponse(res, statusCode, payload, message);
    } catch (error) {
      next(error);
    }
  };

}
export const refundController = new RefundController();