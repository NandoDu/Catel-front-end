import apiCon, {HttpMethod} from './apiCon';

export * from './hotel/orderDetail';


interface luckyO {
  id: number,
  pic: string
}

const luckyAPI = apiCon<unknown, luckyO>(HttpMethod.Get, '/hotel/lucky');

interface hotelListI {
  limit?: number,
  page?: number,
  filterPriceLower?: number,
  filterPriceUpper?: number,
  filterRate?: number,
  filterLocation?: string,
  filterInDate?: string,
  filterOutDate?: string,
}

interface hotelListItemO {
  id: number,
  name: string,
  address: string,
  rate: number,
  minPrice: number,
  headPic: number
}

type hotelListO = hotelListItemO[]
const GetHotelListAPI = apiCon<hotelListI, hotelListO>(HttpMethod.Get, '/hotel/');
export {
  luckyO, luckyAPI,
  hotelListI, hotelListO, hotelListItemO, GetHotelListAPI,
};