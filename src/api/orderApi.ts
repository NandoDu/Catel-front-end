import apiCon, {HttpMethod} from './apiCon';

interface OrdersOfUserI {
  id: number;
}

interface OrderItemInfo {
  id: number,
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

interface BookHotelI {
  userId: number,
  hotelId: number,
  checkInDate: string,
  checkOutDate: string,
  selectedCoupons?: number[],
  configId: number,
  residents: string[]
}

interface CouponListItemO {
  id: number,
  type: string,
  name: string,
  condition: string,
  amount: number,
  available: boolean,
}

interface BookInfoO {
  totalPrice: number,
  actualPrice: number,
  discountTotal: number,
  availableCoupon: CouponListItemO[]
}

interface BookHotelO {
  orderId: number,
}

const PreviewHotelAPI = apiCon<BookHotelI, BookInfoO>(HttpMethod.Post, '/order/preview');
const BookHotelAPI = apiCon<BookHotelI, BookHotelO>(HttpMethod.Post, '/order/');
export {
  OrdersOfUserI, OrderItemInfo, CreditRecord, OrdersOfUserO, ordersOfUserAPI,
  BookHotelI, BookInfoO, CouponListItemO, BookHotelO, PreviewHotelAPI, BookHotelAPI,
};

  

