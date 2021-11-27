import apiCon, {HttpMethod} from '../apiCon';

interface UserResidentsI {
  id: number;
}

interface UserResident {
  id: number,
  realName: string,
  phoneNumber: string,
  idNo: string,
  birthday: string,
}

type UserResidentsO = UserResident[];

const userResidentsAPI = apiCon<UserResidentsI, UserResidentsO>(HttpMethod.Get, '/person/by-user');

export {
  UserResidentsI,
  UserResident,
  UserResidentsO,
  userResidentsAPI,
};
