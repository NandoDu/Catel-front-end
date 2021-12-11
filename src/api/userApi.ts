import apiCon, {HttpMethod} from './apiCon';

export * from './user/login';
export * from './user/userResidents';
export * from './user/addResident';
export * from './user/deleteResident';
export * from './user/register';

interface RoomInfoI {
  hotelId: number,
}

interface RoomInfoItemO {
  id: number,
  roomType: string,
  price: number,
  total: number,
  breakfast: boolean,
  peopleMax: number,
}

type RoomInfoO = RoomInfoItemO[];
const RoomInfoAPI = apiCon<RoomInfoI, RoomInfoO>(HttpMethod.Get, '/room/by-hotel');

interface HotelInfoI {
  id: number;
}

interface HotelInfoO {
  id: number,
  name: string,
  address: string,
  bizRegion: string,
  hotelStar: string,
  rate: number,
  description: string,
  phoneNumber: string,
  pic: string,
  creditBound: number,
  announcement: string
}

const HotelInfoAPI = apiCon<HotelInfoI, HotelInfoO>(HttpMethod.Get, 'hotel/detail');

interface GetCommentI {
  id: number;
}

interface GetCommentItemO {
  id: number,
  score: number,
  user_id: number,
  hotel_id: number,
  title: string,
  content: string,
  avatar: string,
  username: string,
}

type GetCommentO = GetCommentItemO[];
const GetCommentAPI = apiCon<GetCommentI, GetCommentO>(HttpMethod.Get, 'comment/by-hotel');

interface BookHotelI {
  userId: number,
  hotelId: number,
  residents: string[],
  configId: number,
  checkInDate: string,
  checkOutDate: string
}

interface BookHotelO {
  orderId: number,
}

const BookHotelAPI = apiCon<BookHotelI, BookHotelO>(HttpMethod.Post, '/order/');

interface CarouselI {
  limit: number,
}

interface CarouselItemO {
  id: number,
  name: string,
  address: string,
  rate: number,
  minPrice: number,
  landscape: string
}

type CarouselO = CarouselItemO[]
const GetCarouselAPI = apiCon<CarouselI, CarouselO>(HttpMethod.Get, '/hotel/hot');
export {
  RoomInfoI, RoomInfoItemO, RoomInfoO, RoomInfoAPI,
  HotelInfoI, HotelInfoO, HotelInfoAPI,
  GetCommentI, GetCommentItemO, GetCommentO, GetCommentAPI,
  BookHotelI, BookHotelO, BookHotelAPI,
  CarouselI, CarouselItemO, CarouselO, GetCarouselAPI,
};
