import apiCon, {HttpMethod} from './apiCon';

export * from './user/login';
export * from './user/userResidents';
export * from './user/addResident';
export * from './user/deleteResident';
export * from './user/register';

interface RoomInfoItemO {
  id: number,
  roomType: string,
  price: number,
  total: number,
  breakfast: boolean,
  peopleMax: number,
}

type  RoomInfoO = RoomInfoItemO[];

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
  landscape: string,
  portrait: string,
  creditBound: number,
  announcement: string,
  rooms: RoomInfoItemO[]
  rateDist: number[],
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
  RoomInfoItemO, RoomInfoO, HotelInfoI, HotelInfoO, HotelInfoAPI,
  GetCommentI, GetCommentItemO, GetCommentO, GetCommentAPI,
  CarouselI, CarouselItemO, CarouselO, GetCarouselAPI,
};
