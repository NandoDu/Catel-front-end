import apiCon, {HttpMethod} from '../apiCon';

interface LoginI {
  username: string,
  password: string,
}

interface LoginO {
  id: number;
  email: string;
  username: string;
  credit: number;
  userType: string;
  vipType: string;
  avatar: string;
}

const loginAPI = apiCon<LoginI, LoginO>(HttpMethod.Post, '/user/login');


export {
  LoginI,
  LoginO,
  loginAPI,
};
