
import ordersModel from './orders.model';

export const ordersResolvers = {
  Query: {
    orders: () => {
      return ordersModel.getAllOrders()
    }
  }
}