// Api Constructor

import axios from './request';

enum HttpMethod {
  Get, Post, Put, Delete
}

type Api<I, O> = (input: I) => Promise<O>

const apiCon = <I, O>(method: HttpMethod, url: string): Api<I, O> => {
  const items = url.split('/');
  const name = items[items.length - 1];
  switch (method) {
    case HttpMethod.Get:
      return async params => {
        console.log(`[Api] Name: ${name}, Method: GET, Url: ${url}`);
        return await axios.get(url, { params });
      };
    case HttpMethod.Post:
      return async data => {
        console.log(`[Api] Name: ${name}, Method: POST, Url: ${url}`);
        return await axios.post(url, data);
      };
    case HttpMethod.Put:
    case HttpMethod.Delete:
    default:
      throw 'Unsupported Http Method';
  }
};

export default apiCon;
export { HttpMethod, Api };
