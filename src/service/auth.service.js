import httpClient from "./http.service";

const END_POINT = '/user';
class AuthService {
  login(user) {
    return httpClient
      .post(END_POINT + '/login', {
        center_number: '1',
        phone_number: user.phone_number,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('token', JSON.stringify(response.data.token));
        }
        // console.log(response.data);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

}

export default new AuthService();