import apiCon, {HttpMethod} from './apiCon';

interface LoginI {
  username: string,
  password: string,
}

interface LoginO {
  id: number,
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

interface UserResidentsI {
  id: number;
}

interface UserResident {
  realName: string,
  phoneNumber: string,
  idNo: string,
  birthday: string,
}

type UserResidentsO = UserResident[];

const userResidentsAPI = apiCon<UserResidentsI, UserResidentsO>(HttpMethod.Get, '/person/by-user');

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
export {
  LoginI, LoginO, loginAPI,
  RoomInfoI, RoomInfoItemO, RoomInfoO, RoomInfoAPI,
  UserResidentsI, UserResident, UserResidentsO, userResidentsAPI,
  HotelInfoI, HotelInfoO, HotelInfoAPI,
};
