import apiCon, {HttpMethod} from '../apiCon';

interface OrderDetailI {
  orderId: number;
}

interface OrderDetailO {
  id: number;
  hotelId: number;
  creditDelta: number;
  hotelName: string;
  checkInDate: string;
  checkOutDate: string;
  createdTime: string;
}

const hotelDetailAPI = apiCon<OrderDetailI, OrderDetailO>(HttpMethod.Get, '/order/detail');

export {
  OrderDetailI,
  hotelDetailAPI,
};
