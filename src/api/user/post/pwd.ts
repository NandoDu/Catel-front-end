import apiCon, {HttpMethod} from '../../apiCon';

interface ChangePassI {
  id: number,
  oldPass: string,
  newPass: string
}

const changePassAPI = apiCon<ChangePassI>(HttpMethod.Post, '/user/pwd');

export {
  ChangePassI,
  changePassAPI,
};
