import AppDataSource from '../config/db.config';
import { RefundEntity } from '../entity/refund.entity';
import { IProcessRefundPayload } from '../interfaces/refund.interface';

export const RefundRepository = AppDataSource.getRepository(RefundEntity).extend({
  async findById(id: string): Promise<RefundEntity | null> {
    return await this.findOneBy({ id });
    },
    

    async createAndSave(data: IProcessRefundPayload){
        const refund = this.create(data);
        return await this.save(refund);
        
      }
});
