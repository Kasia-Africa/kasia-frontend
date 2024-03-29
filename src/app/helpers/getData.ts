import request from './request';

export default async function getData<T>(url: string): Promise<T> {
  const response = await request(`${url}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
  return response;
}
