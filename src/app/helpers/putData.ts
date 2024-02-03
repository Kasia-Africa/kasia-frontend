import request from './request';

export default async function putData<T, R>(url: string, data?: T): Promise<R> {
  const response = await request(`${url}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  });
  return response;
}