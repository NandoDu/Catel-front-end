import apiCon, {HttpMethod} from '../apiCon';

interface RegisterI {
  username: string,
  password: string,
}

interface RegisterO {
  id: number;
  email: string;
  username: string;
  credit: number;
  userType: string;
  vipType: string;
}

const register = apiCon<RegisterI, RegisterO>(HttpMethod.Post, '/user/');


export {
  RegisterI,
  RegisterO,
  register,
};
