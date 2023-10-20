import { Column, Entity } from 'typeorm';
import { CurrencyEnum, OrderStatusEnum, PaymentStatusEnum } from '../common-module/utils/enum';
import { BaseEntity } from '../modules/base/entity';

@Entity('orders')
export class OrderEntity extends BaseEntity {


  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({ type: 'varchar', length: 255 })
  description: string;

  @Column({name:'order_id', type: 'varchar', length: 255 })
  orderId: string;

  @Column({ type: 'enum', enum: OrderStatusEnum, default: OrderStatusEnum.CREATED })
  status: OrderStatusEnum;

  @Column({ name: 'payment_status', type: 'enum', enum: PaymentStatusEnum, default: PaymentStatusEnum.PENDING })
  paymentStatus: PaymentStatusEnum;

  @Column({name:'charging_session_id', type: 'uuid', nullable: true })
  chargingSessionId: string | null;

  @Column({name:'tariff_id', type: 'uuid', nullable: true })
  tariffId: string | null;

  @Column({ type: 'enum', enum: CurrencyEnum, default: CurrencyEnum.INR })
  currency: CurrencyEnum;

  @Column({ name:'merchant_id',type: 'varchar', length: 255, nullable:true })
  merchantId: string;

  @Column({ name:'user_id', type: 'uuid', nullable: true })
  userId: string | null;

  @Column({name:'admin_user_id', type: 'uuid', nullable: true })
  adminUserId: string | null;

  @Column({name:'fleet_id', type: 'uuid', nullable: true })
  fleetId: string | null;

  @Column({name:'invoice_id', type: 'varchar', nullable: true })
  invoiceId: string | null;
}
