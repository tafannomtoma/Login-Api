import axios from '../../Helpers/axios'
import { authConstant } from './AuthType'

export const login = (user) => {
    return async (dispatch) => {
        dispatch({ type: authConstant.LOGIN_REQUEST })

        const res = await axios.post(`/login/`, {
            ...user
        })
        if (res.data.success === 1 && res.data.data.status === 1) {
            const { status, name, type, userId } = res.data.data;
            const { success, message, token } = res.data;

            window.localStorage.setItem('name', name)
            window.localStorage.setItem('token', token)
            window.localStorage.setItem('message', message)
            window.localStorage.setItem('status', status)
            window.localStorage.setItem('success', success)
            window.localStorage.setItem('type', type)
            window.localStorage.setItem('userId', userId)

            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, message, status, success, type, userId, name
                }
            })
        }
        else {
            if (res.data.data.success === 0) {
                dispatch({
                    type: authConstant.LOGIN_FAILURE,
                    payload: {
                        error: "Login Failed"
                    }
                })
            }
        }
    }
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = window.localStorage.getItem('token');
        if (token) {
            const message = window.localStorage.getItem('message');
            const status = window.localStorage.getItem('status');
            const success = window.localStorage.getItem('success');
            const type = window.localStorage.getItem('type');
            const userId = window.localStorage.getItem('userId');

            dispatch({
                type: authConstant.LOGIN_SUCCESS,
                payload: {
                    token, message, status, success, type, userId
                }
            });
        }
        else {
            dispatch({
                type: authConstant.LOGIN_FAILURE,
                payload: { error: 'Failed to login' }
            });
        }
    }
}

export const signOut = () => {
    return async dispatch => {
        dispatch({ type: authConstant.LOGOUT_REQUEST });
        const token = window.localStorage.getItem('token');
        if (token) {
            window.localStorage.clear('token')
            dispatch({ type: authConstant.LOGOUT_SUCCESS });
            window.location.replace('/login')
        }
        else {
            dispatch({
                type: authConstant.LOGOUT_FAILURE,
                payload:{ error:"you have to login first"}
            })
        }
    }

}
    
    