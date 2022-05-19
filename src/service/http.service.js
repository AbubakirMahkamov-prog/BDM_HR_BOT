import axios from 'axios';
// import authHeader from './auth.header';
import router from '../router';
import { cacheAdapterEnhancer } from 'axios-extensions';
import store from '../store';

const baseURL = process.env.VUE_APP_API_URL || 'http://info.bdmgroup.uz/admin/api/h-r';

const cacheConfig = {
    enabledByDefault: false, 
    cacheFlag: 'useCache'
}

const httpClient = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        // 'Cache-Control': 'no-cache'
    },
    adapter: cacheAdapterEnhancer(axios.defaults.adapter, cacheConfig)
});

//const getAuthToken = () => authHeader;

// const authInterceptor = (config) => {
//     config.headers['Authorization'] = authHeader();
//     return config;
// }

// httpClient.interceptors.request.use(authInterceptor);

// interceptor to catch errors
const errorInterceptor = error => {
    // check if it's a server error
    if (!error.response) {
    //   this.$notify.warn('Network/Server error');
      return Promise.reject(error);
    }

    // all the other error responses
    switch(error.response.status) {
        case 400:
            console.error(error.response.status, error.message);
            // this.$notify.warn('Nothing to display','Data Not Found');
            break;

        case 401: // authentication error, logout the user
            // this.$notify.warn( 'Please login again', 'Session Expired');
            localStorage.removeItem('token');
            router.push('/login');
            break;

        default:
            console.error(error.response.status, error.message);
            //this.$no  tify.error('Server Error');

    }
    return Promise.reject(error);
}

// Interceptor for responses
const responseInterceptor = response => {
    switch(response.status) {
        case 200: 
            if(response.data.status == true){
                response.data = response.data.data
            }else {
                switch(response.data.error_code){
                    case 401:
                        localStorage.removeItem('token');
                        router.push('/login');
                        return Promise.reject('Xatolik');
                    // break;
                    case 400:
                        store.state.error_message = response.data.message + ': ' + response.data.errors[0].msg;
                        return Promise.reject('Xatolik');
                    // break;
                }
            }
            break;
        // any other cases
        default:
            // default case
    }

    return response;
}

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;