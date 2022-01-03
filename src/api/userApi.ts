import apiCon, {HttpMethod} from './apiCon';

export * from './user/login';
export * from './user/userResidents';
export * from './user/addResident';
export * from './user/deleteResident';
export * from './user/register';
export * from './user/userCreditHistory';
export * from './user/get/user';
export * from './user/post/pwd';

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

interface chargeVipI {
  id: number,
  vipType: string,
}

const ChargeVipAPI = apiCon<chargeVipI>(HttpMethod.Put, '/user/');

interface modifyUserInfoI {
  id: number,
  name: string,
  email: string,
}

interface modifyResidentInfoI {
  residentId: number,
  name: string,
  phoneNumber: string,
}

const ModifyUserInfoAPI = apiCon<modifyUserInfoI>(HttpMethod.Put, '/user/');
const ModifyResidentInfoAPI = apiCon<modifyResidentInfoI>(HttpMethod.Put, '/person/');
export {
  RoomInfoItemO, RoomInfoO, HotelInfoI, HotelInfoO, HotelInfoAPI,
  GetCommentI, GetCommentItemO, GetCommentO, GetCommentAPI,
  CarouselI, CarouselItemO, CarouselO, GetCarouselAPI,
  chargeVipI, ChargeVipAPI,
  modifyUserInfoI, modifyResidentInfoI, ModifyResidentInfoAPI, ModifyUserInfoAPI,
};
