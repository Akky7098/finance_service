import AppDataSource from '../config/db.config';
import { OrderEntity } from '../entity/order.entity';

export const OrderRepository = AppDataSource.getRepository(OrderEntity).extend({
  async findById(id: string): Promise<OrderEntity | null> {
    return await this.findOneBy({ id });
  },

  async createAndSave(data: Partial<OrderEntity>){
    const order = this.create(data);
    return await this.save(order);
    
  }
});
