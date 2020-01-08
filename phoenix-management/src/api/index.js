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

export const getUsers = () => {
    return request(
        {
            url: '/getUsers',
            method: 'get'
        }
    )
}

export const registerUser = ({ address, age, avatar, email, id, mobile, nickname}) => {
    return request(
        {
            url: '/register',
            method: 'post',
            data: JSON.stringify({ address, age: Number(age), avatar, email, id, mobile, nickname}),
        }
    )
}

export const deleteUser = ({mobile}) => {
    return request(
        {
            url: '/deleteUser',
            method: 'post',
            data: JSON.stringify({ mobile }),
        }
    )
}

export const editUser = ({ address, age, avatar, email, id, mobile, nickname}) => {
    return request(
        {
            url: '/editUser',
            method: 'post',
            data: JSON.stringify({ address, age, avatar, email, id, mobile, nickname}),
        }
    )
}


