import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrdersService {

  constructor(@InjectModel(Order) private OrderModel: typeof Order) {
  }

  create(createOrderDto: CreateOrderDto) {
    return this.OrderModel.create(createOrderDto);
  }

  findAll() {
    return this.OrderModel.findAll();
  }

  findOne(id: string) {
    return this.OrderModel.findByPk(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.OrderModel.findByPk(id);
    return order.update(updateOrderDto);
  }

  async remove(id: string) {
    const order = await this.OrderModel.findByPk(id);
    order.destroy();
  }
}
