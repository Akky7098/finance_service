import { Column, Entity } from 'typeorm';
import { PaymentMethodEnum, PaymentStatusEnum, RazorPayCurrencyEnum, TransactionTypeEnum } from '../common-module/utils/enum';
import { BaseEntity } from '../modules/base/entity';

@Entity('transactions')
export class TransactionEntity extends BaseEntity {
  @Column({ type: 'decimal', precision: 12, scale: 2, default: '0' })
  amount: number;

  @Column({ name: 'acquirer_data_auth_code', type: 'varchar',nullable: true })
  acquirerDataAuthCode: string;

  @Column({ name: 'acquirer_data_rrn', type: 'varchar',nullable: true })
  acquirerDataRrn: string;
  
  @Column({ name: 'acquirer_data_bank_transaction_id', type: 'varchar',nullable: true })
  acquirerDataBankTransactionId: string;

  @Column({ name: 'acquirer_data_transaction_id', type: 'varchar',nullable: true })
  acquirerDataTransactionId: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, name:'amount_refunded',default:0 })
  amountRefunded: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, name:'amount_transferred',default:0 })
  amountTransferred: number;
  
  @Column({ name: 'bank', type: 'varchar', nullable: true })
  bank: string;

  @Column({ type: 'boolean', default: false })
  captured: boolean;

  @Column({ name: 'card_emi', type: 'boolean', nullable: true })
  cardEmi: boolean;

  @Column({ name: 'card_entity', type: 'varchar', nullable: true })
  cardEntity: string;

  @Column({ name: 'card_id', type: 'varchar', nullable: true })
  cardId: string;

  @Column({ name: 'card_iin', type: 'varchar', nullable: true })
  cardIin: string;

  @Column({ name: 'card_international', type: 'boolean', nullable: true })
  cardInternational: boolean;

  @Column({ name: 'card_issuer', type: 'varchar', nullable: true })
  cardIssuer: string;

  @Column({ name: 'card_last4', type: 'varchar', nullable: true })
  cardLast4: string;

  @Column({ name: 'card_name', type: 'varchar', nullable: true })
  cardName: string;

  @Column({ name: 'card_network', type: 'varchar', nullable: true })
  cardNetwork: string;

  @Column({ name: 'card_sub_type', type: 'varchar', nullable: true })
  cardSubType: string;

  @Column({ name: 'card_type', type: 'varchar', nullable: true })
  cardType: string;

  @Column({ name: 'contact', type: 'varchar', nullable: true })
  contact: string;

  @Column({ name: 'currency', type: 'enum', enum: RazorPayCurrencyEnum, nullable: true })
  currency: RazorPayCurrencyEnum;

  @Column({ name: 'description', type: 'varchar', nullable: true })
  description: string;

  @Column({ name: 'email', type: 'varchar', nullable: true })
  email: string;

  @Column({ name: 'entity', type: 'varchar', nullable: true })
  entity: string;

  @Column({ name: 'error_code', type: 'varchar', nullable: true })
  errorCode: string;

  @Column({ name: 'error_description', type: 'varchar', nullable: true })
  errorDescription: string;

  @Column({ name: 'error_reason', type: 'varchar', nullable: true })
  errorReason: string;

  @Column({ name: 'error_source', type: 'varchar', nullable: true })
  errorSource: string;

  @Column({ name: 'fee', type: 'varchar', nullable: true })
  fee: string;

  @Column({ name: 'transaction_id', type: 'varchar', nullable: true })
  transactionId: string;

  @Column({ name: 'international', type: 'boolean', default: false })
  international: boolean;

  @Column({ name: 'invoice_id', type: 'varchar', nullable: true })
  invoiceId: string;

  @Column({ name: 'method', type: 'enum', enum: PaymentMethodEnum })
  method: PaymentMethodEnum;

  @Column({ name: 'order_id', type: 'varchar', nullable: false })
  orderId: string;

  @Column({ name: 'refund_status', type: 'varchar', nullable: true })
  refundStatus: string;

  @Column({ name: 'status', type: 'enum', enum: PaymentStatusEnum })
  status: PaymentStatusEnum;

  @Column({ name: 'tax', type: 'varchar', nullable: true })
  tax: string;

  @Column({ name: 'token_id', type: 'varchar', nullable: true })
  tokenId: string;

  @Column({ name: 'vpa', type: 'varchar', nullable: true })
  vpa: string;

  @Column({ name: 'upi_payer_account_type', type: 'varchar', length: 255 , nullable: true })
  upiPayerAccountType: string;

  @Column({ name: 'wallet', type: 'varchar', length: 255, nullable: true })
  wallet: string;

  @Column({ name: 'type', type: 'enum', enum: TransactionTypeEnum , default: TransactionTypeEnum.PAYMENT})
  type: TransactionTypeEnum;
}
