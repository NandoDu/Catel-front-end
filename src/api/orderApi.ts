import apiCon, {HttpMethod} from './apiCon';

interface OrdersOfUserI {
  id: number;
}

interface OrderItemInfo {
  orderState: string,
  price: string,
  hotelName: string,
  hotelAddress: string,
  checkInDate: string,
  checkOutDate: string,
  roomType: string,
  breakfast: boolean,
  img: string,
}

interface CreditRecord {
  orderState: string;
  price: number;
  hotelName: string;
  hotelAddress: string;
  checkInDate: string;
  checkOutDate: string;
  creditDelta: number;
}

type OrdersOfUserO = OrderItemInfo[];
const ordersOfUserAPI = apiCon<OrdersOfUserI, OrdersOfUserO>(HttpMethod.Get, '/order/by-user');

export {
  OrdersOfUserI, OrderItemInfo, CreditRecord, OrdersOfUserO, ordersOfUserAPI,
};

  

