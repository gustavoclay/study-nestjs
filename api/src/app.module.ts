import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [
    OrdersModule,
    // SequelizeModule.forRoot({
    //   dialect: 'sqlite',
    //   host: join(__dirname, 'database.sqlite'),
    //   models: [Order],
    //   autoLoadModels: true,
    // })
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'db',
      port: 3306,
      database: 'fin',
      username: 'root',
      password: 'root',
      models: [Order],
      autoLoadModels: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
