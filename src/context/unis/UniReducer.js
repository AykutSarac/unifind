import {
    SEARCH_UNIS,
    CLEAR_UNIS,
    SET_LOADING,
    SET_ERROR
} from '../types'

export const UniReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_UNIS:
            return {
                ...state,
                unis: action.payload,
                loading: false
            }

        case CLEAR_UNIS:
            return {
                ...state,
                unis: [],
                error: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default UniReducer;