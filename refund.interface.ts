import { NextFunction, Request, Response } from 'express';
import { CurrencyEnum, RazorPayCurrencyEnum, RefundSpeedEnum, RefundStatusEnum } from '../common-module/utils/enum';
import { RefundEntity } from '../entity/refund.entity';
import { IServiceResponse } from '../common-module/utils/interface';

export interface IRefundController {
  initiateRefund(req: Request, res: Response, next: NextFunction): Promise<void>
}

export interface IRefundService {
  processRefund(id: string, description?: string, userId?: string, adminUserId?: string): Promise<IServiceResponse>;
}

export interface ICreateRefund extends Omit<RefundEntity, 'id' | 'refund'> {}

export interface IProcessRefundPayload {
  amount: number;
  description?: string;
  orderId: string;
  status: RefundStatusEnum;
  refundProcessId?: string;
  refundSpeed: RefundSpeedEnum;
  transactionId: string;
  currency: CurrencyEnum;
  userId?: string | null;
  adminUserId?: string | null;
  fleetId?: string | null;
}

export interface IRefundPayload {
  amount: number;
  receipt?: string;
  speed?: string;
}

export interface IRefundResponse {
  amount: number;
  receipt?: string;
  currency: RazorPayCurrencyEnum;
  status: RefundStatusEnum;
  id: string;
  payment_id: string;
  speed_processed: RefundSpeedEnum;
  speed_requested: RefundSpeedEnum;
}
