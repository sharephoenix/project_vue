import request from '../utils/request';

export const sendCode = ({mobile}) => {
    window.console.log(`/sendCode/${mobile}`)
    return request({
        url: `/sendCode/${mobile}`,
        method: 'get'
    });
}

export const getCode = ({ mobile }) => {
    return request(
        {
            url: `/getCode/${mobile}`,
            method: 'get',
            params: null
        }
    )
}

export const login = ({mobile, code }) => {
    return request(
        {
            url: '/login',
            method: 'post',
            data: JSON.stringify({ mobile, code }),
        }
    )
}