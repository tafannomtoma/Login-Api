import { authConstant } from './auth-type'

const initialState = {
    token: null,
    name: "",
    success: 0,
    status: '',
    userId: '',
    type: '',
    message: '',
    authenticate: false,
    authenticating: false
}

export default (state = initialState, action) => {


    switch (action.type) {
        case authConstant.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating: true,
            }
            break;

        case authConstant.LOGIN_SUCCESS:
            state = {
                token: action.payload.token,
                name: action.payload.name,
                success: action.payload.success,
                status: action.payload.status,
                userId: action.payload.userId,
                type: action.payload.type,
                message: action.payload.message,
                authenticate: true,
                authenticating: false
            }
            break;

        case authConstant.LOGOUT_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case authConstant.LOGOUT_SUCCESS:
            state = {
                ...initialState,
            }
            break;
        case authConstant.LOGOUT_FAILURE:
            state = {
                ...state,
                error: action.payload.error,
                loading: false
            }
            break;
    }
    return state
}