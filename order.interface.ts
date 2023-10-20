import { NextFunction, Request, Response } from 'express';
import { IPagination, IQuery, IServiceResponse } from '../common-module/utils/interface';
import {
  CurrencyEnum,
  InvoiceTypeEnum,
  JournalStatusEnum,
  JournalTypeEnum,
  OperationEnum,
  OrderStatusEnum,
  PaymentStatusEnum,
  RazorPayCurrencyEnum,
  STATUS_TYPE,
} from '../common-module/utils/enum';
import { OrderEntity } from '../entity/order.entity';

export interface IOrderController {
  addOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
  getRazorPayOrder(req: Request, res: Response, next: NextFunction): Promise<void>;
  orderListByIds(req: Request, res: Response, next: NextFunction): Promise<void>;
}

export interface IOrderService {
  createOrder(payload: ICreateOrder): Promise<IServiceResponse>,
  getRazorPayOrderById(rderId: string): Promise<IServiceResponse>
  listByIds(ids: string[]): Promise<IServiceResponse>;
}

export interface ICreateOrder extends Omit<OrderEntity, 'id' | 'orders'> {}

export interface ICreateOrderPayload {
  amount: number;
  description: string;
  orderId?: string;
  status: OrderStatusEnum;
  paymentStatus: PaymentStatusEnum;
  currency: CurrencyEnum;
  invoiceType: InvoiceTypeEnum;
  merchantId: string;
  userId?: string | null;
  adminUserId?: string | null;
  fleetId?: string | null;
}

export interface IGenerateRazorPayOrderPayload {
  amount: number;
  receipt?: string;
  currency: RazorPayCurrencyEnum;
}

export interface IOrderResponse {
  amount: number;
  receipt?: string;
  currency: RazorPayCurrencyEnum;
  status: OrderStatusEnum;
  id: string;
}
export interface ICreateJournalPayload {
  credits: number;
  description: string;
  transactionId: number | null;
  paymentMode?: string | null;
  bankName?: string | null;
  bankTxnId?: string | null;
  orderId?: string;
  status?: JournalStatusEnum;
  entryType: JournalTypeEnum;
  chargingSessionId?: string | null;
  tariffId: string | null;
  currency: CurrencyEnum;
  invoiceType: InvoiceTypeEnum;
  merchantId?: string | null;
  externalPaymentId?: string | null;
  userId?: string | null;
  adminUserId?: string | null;
  fleetId?: string | null;
  journalLine?: Partial<IJouranlLine>
}

interface IJouranlLine {
  previousBalance: number;
  currentBalance: number;
  narration:string;
  operation:OperationEnum;
  status?:STATUS_TYPE;
}
export interface IFilterList extends IPagination, Partial<ICreateOrderPayload> {}

export interface IUpdateOrder extends Partial<ICreateOrderPayload> {}

export interface IGetListByIds {
  ids: string[];
}