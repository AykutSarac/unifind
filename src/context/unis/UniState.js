import React, { useReducer } from 'react'
import UniContext from './uniContext'
import UniReducer from './UniReducer'
import {
    SEARCH_UNIS,
    CLEAR_UNIS,
    SET_LOADING,
    SET_ERROR
} from '../types'

// List of universities [Source]: https://github.com/Hipo/university-domains-list
import uniDB from './uniDB.json'


// Convert Turkish characters to latin
function turkishToEnglish(text) {
    return text.replace('Ğ', 'g')
        .replace('Ü', 'u')
        .replace('Ş', 's')
        .replace('I', 'i')
        .replace('İ', 'i')
        .replace('Ö', 'o')
        .replace('Ç', 'c')
        .replace('ğ', 'g')
        .replace('ü', 'u')
        .replace('ş', 's')
        .replace('ı', 'i')
        .replace('ö', 'o')
        .replace('ç', 'c');
}

const UniState = (props) => {

    const initialState = {
        unis: [],
        suggestion: null,
        loading: false,
        error: false
    }

    const [state, dispatch] = useReducer(UniReducer, initialState);

    // Search Universities
    const searchUnis = (name) => {

        setLoading();
        const NAME_TR = turkishToEnglish(name).toUpperCase();
        const data = uniDB.filter(uni => turkishToEnglish(uni.name).toUpperCase().includes(NAME_TR));

        if (data.length === 0) {
            setError(true);
        } else {
            setError(false);
        }

        dispatch({
            type: SEARCH_UNIS,
            payload: data.slice(0, 100)
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