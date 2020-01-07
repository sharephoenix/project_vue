import axios from 'axios';
import eventBus from '@/components/common/bus'

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    baseURL: 'http://localhost:9090',
    timeout: 5000
});

// window.console.log('headers:', service.headers)

service.interceptors.request.use(
    config => {
        window.console.log('fffheader::', eventBus.$data.loginInfo)
        config.headers = {
            ...config.headers
        }
        if (eventBus.$data.loginInfo && eventBus.$data.loginInfo.accessToken) {
            config.headers = {
                ...config.headers,
                ...{
                    'Token': eventBus.$data.loginInfo.accessToken || '',
                }
            }
        }
        if (eventBus.$data.loginInfo && eventBus.$data.loginInfo.mobile) {
            config.headers = {
                ...config.headers,
                ...{
                    'Authorization': eventBus.$data.loginInfo.mobile || ''
                }
            }
        }
        return config;
    },
    error => {
        window.console.log(JSON.stringify(error))
        return Promise.reject()
    }
);

service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        window.console.log(JSON.stringify(error))
        return Promise.reject()
    }
);

export default service;
