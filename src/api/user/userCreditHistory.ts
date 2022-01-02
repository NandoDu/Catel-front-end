import apiCon, {HttpMethod} from '../apiCon';

interface CreditHistoryI {
  userId: number;
}

interface CreditEntry {
  creditDelta: number;
  createdWhen: string;
  orderId: number;
}

type CreditHistoryO = CreditEntry[];

const userCreditHistoryAPI = apiCon<CreditHistoryI, CreditHistoryO>(HttpMethod.Get, '/user/credit-history');

export {
  CreditHistoryI,
  CreditEntry,
  CreditHistoryO,
  userCreditHistoryAPI,
};
