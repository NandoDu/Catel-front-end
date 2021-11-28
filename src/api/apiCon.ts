// Api Constructor

import axios from './request';

enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
}

type Api<I, O> = (input: I) => Promise<O>

const apiCon = <I, O = never>(method: HttpMethod, url: string): Api<I, O> => {
  const items = url.split('/');
  const name = items[items.length - 1];
  switch (method) {
    case HttpMethod.Get:
      return async params => {
        console.log(`[Api] Name: ${name}, Method: GET, Url: ${url}`);
        return await axios.get(url, {params});
      };
    case HttpMethod.Post:
    case HttpMethod.Put:
    case HttpMethod.Delete:
      return async data => {
        console.log(`[Api] Name: ${name}, Method: ${method}, Url: ${url}`);
        return await axios.request({
          url,
          data,
          method,
        });
      };
    default:
      throw 'Unsupported Http Method';
  }
};

export default apiCon;
export {HttpMethod, Api};
