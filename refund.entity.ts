import { Column, Entity } from 'typeorm';
import { CurrencyEnum, RefundSpeedEnum, RefundStatusEnum } from '../common-module/utils/enum';
import { BaseEntity } from '../modules/base/entity';

@Entity('refund')
export class RefundEntity extends BaseEntity {


  @Column({ type: 'decimal', precision: 12, scale: 2})
  amount: number;

  @Column({ type: 'varchar', length: 255, nullable:true })
  description: string;

  @Column({name:'order_id', type: 'varchar', length: 255 })
  orderId: string;

  @Column({ type: 'enum', enum: RefundStatusEnum, default: RefundStatusEnum.PENDING })
  status: RefundStatusEnum;

  @Column({name:'refund_speed', type: 'enum', enum: RefundSpeedEnum, default: RefundSpeedEnum.NORMAL })
  refundSpeed: RefundSpeedEnum;

  @Column({name:'transaction_id', nullable: false })
  transactionId: string;
  
  @Column({name:'refund_process_id', nullable: true })
  refundProcessId: string ;

  @Column({ type: 'enum', enum: CurrencyEnum, default: CurrencyEnum.INR })
  currency: CurrencyEnum;

  @Column({ name:'user_id', type: 'uuid', nullable: true })
  userId: string | null;

  @Column({name:'admin_user_id', type: 'uuid', nullable: true })
  adminUserId: string | null;

  @Column({name:'fleet_id', type: 'uuid', nullable: true })
  fleetId: string | null;
}
