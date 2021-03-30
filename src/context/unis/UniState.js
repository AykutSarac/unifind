import React, { useReducer } from 'react'
import axios from 'axios'
import UniContext from './uniContext'
import UniReducer from './UniReducer'
import {
    SEARCH_UNIS,
    CLEAR_UNIS,
    SET_LOADING,
    SET_ERROR
} from '../types'

const UniState = (props) => {

    const initialState = {
        unis: [],
        loading: false,
        error: false
    }

    const [state, dispatch] = useReducer(UniReducer, initialState);

    // Search Universities
    const searchUnis = async (name) => {

        setLoading();
        const res = await axios.get(`http://universities.hipolabs.com/search?name=${name}`);

        if (res.data.length === 0) {
            setError(true);
        } else {
            setError(false);
        }

        dispatch({
            type: SEARCH_UNIS,
            payload: res.data.slice(0, 100)
        });
    }

    // Clear Universities
    const clearUnis = () => {
        dispatch({
            type: CLEAR_UNIS
        });
    }

    // Set Loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        });
    }

    // Set Error
    const setError = (bool) => {
        dispatch({
            type: SET_ERROR,
            payload: bool
        });
    }

    return (
        <UniContext.Provider
            value={{
                unis: state.unis,
                loading: state.loading,
                error: state.error,
                searchUnis,
                clearUnis,
                setError
            }}
        >
            { props.children}
        </UniContext.Provider>
    )
}

export default UniState;