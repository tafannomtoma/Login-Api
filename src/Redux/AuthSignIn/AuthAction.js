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
    
    