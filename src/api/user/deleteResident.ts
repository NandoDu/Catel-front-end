import apiCon, {HttpMethod} from '../apiCon';

interface DeleteResidentI {
  residentId: number;
}

const deleteResidentAPI = apiCon<DeleteResidentI>(HttpMethod.Delete, '/person/');

export {
  DeleteResidentI,
  deleteResidentAPI,
};
