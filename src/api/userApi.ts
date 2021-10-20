import apiCon, { HttpMethod } from './apiCon';

interface LoginI {
  username: string,
  password: string,
}
interface LoginO {
  username: string,
}
const loginAPI = apiCon<LoginI, LoginO>(HttpMethod.Post, '/user/login');

export {
  LoginI, LoginO, loginAPI,
};
