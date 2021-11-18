import apiCon, {HttpMethod} from './apiCon';

interface LoginI {
  username: string,
  password: string,
}

interface LoginO {
  username: string,
}

const loginAPI = apiCon<LoginI, LoginO>(HttpMethod.Post, '/user/login');

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

interface GetCommentI{
  id: number
}
interface GetCommentItemO{
  id: number,
  user_id: number,
  hotel_id: number,
  title: string,
  content: string,
  avatar: string,
  username: string,
}
type GetCommentO = GetCommentItemO[];
const GetCommentAPI=apiCon<GetCommentI, GetCommentO>(HttpMethod.Get, 'comment/by-hotel');
export {
  LoginI, LoginO, loginAPI,
  RoomInfoI, RoomInfoItemO, RoomInfoO, RoomInfoAPI,
  HotelInfoI, HotelInfoO, HotelInfoAPI,
  GetCommentI, GetCommentItemO, GetCommentO, GetCommentAPI,
};
