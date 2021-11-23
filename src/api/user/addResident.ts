import apiCon, {HttpMethod} from '../apiCon';

interface AddResidentI {
  userId: number,
  realName: string,
  idNo: string,
  phoneNumber: string,
  birthday: string,
}

const addResidentAPI = apiCon<AddResidentI>(HttpMethod.Post, '/person/');

export {
  AddResidentI,
  addResidentAPI,
};
