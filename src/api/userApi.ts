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
export {
  LoginI, LoginO, loginAPI,
  RoomInfoI, RoomInfoItemO, RoomInfoO, RoomInfoAPI,
};
