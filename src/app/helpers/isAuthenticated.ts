import Cookies from 'js-cookie';

export default function isAuthenticated(): boolean {
  return !!Cookies.get('access_token');
}