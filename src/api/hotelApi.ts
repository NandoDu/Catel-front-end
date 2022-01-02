import apiCon, {HttpMethod} from './apiCon';

export * from './hotel/orderDetail';


interface luckyO {
  id: number,
  landscape: string
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
  filterStar?: string,
}

interface hotelListItemO {
  id: number,
  name: string,
  address: string,
  rate: number,
  minPrice: number,
  landscape: string,
  portrait: string,
}

type hotelListO = hotelListItemO[]
const GetHotelListAPI = apiCon<hotelListI, hotelListO>(HttpMethod.Get, '/hotel/');

interface roomInfoI {
  id: number;
}

interface roomInfoO {
  id: number;
  roomType: string;
  price: number;
  total: number;
  breakfast: boolean;
  peopleMax: number;
}

const GetRoomInfoAPI = apiCon<roomInfoI, roomInfoO>(HttpMethod.Get, '/room/');

interface briefHotelInfoI {
  id: number;
}

interface briefHotelInfoO {
  id: number;
  name: string;
  address: string;
  rate: number;
  minPrice: number;
  landscape: string;
  portrait: string;
  star: string;
}

const BriefHotelInfoAPI = apiCon<briefHotelInfoI, briefHotelInfoO>(HttpMethod.Get, '/hotel/brief');
export {
  luckyO, luckyAPI,
  hotelListI, hotelListO, hotelListItemO, GetHotelListAPI,
  roomInfoI, roomInfoO, GetRoomInfoAPI,
  briefHotelInfoI, briefHotelInfoO, BriefHotelInfoAPI,
};
