import apiCon, {HttpMethod} from '../apiCon';

interface AnnulOrderI {
  orderId: number;
}

const annulOrderAPI = apiCon<AnnulOrderI>(HttpMethod.Post, '/order/rm');

export {
  AnnulOrderI,
  annulOrderAPI,
};
