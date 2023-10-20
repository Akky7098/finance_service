import AppDataSource from '../config/db.config';
import { TransactionEntity } from '../entity/transaction.entity';

export const TransactionRepository = AppDataSource.getRepository(TransactionEntity).extend({
  async findById(id: string): Promise<TransactionEntity | null> {
    return await this.findOneBy({ id });
  },

});
