import apiCon, {HttpMethod} from '../apiCon';

interface CreditHistoryI {
  userId: number;
}

interface CreditEntry {
  orderState: string;
  price: number;
  hotelName: string;
  hotelAddress: string;
  checkInDate: string;
  checkOutDate: string;
  creditDelta: number;
}

type CreditHistoryO = CreditEntry[];

const userCreditHistoryAPI = apiCon<CreditHistoryI, CreditHistoryO>(HttpMethod.Get, '/user/credit-history');

export {
  CreditHistoryI,
  CreditEntry,
  CreditHistoryO,
  userCreditHistoryAPI,
};
