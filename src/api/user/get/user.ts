import apiCon, {HttpMethod} from '../../apiCon';

interface GetUserI {
  id: number;
}

type GetUserO = User;

const getUserAPI = apiCon<GetUserI, GetUserO>(HttpMethod.Get, '/user/');

export {
  GetUserI,
  GetUserO,
  getUserAPI,
};

