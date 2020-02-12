import { useReducer, useCallback } from 'react'
import axios from 'axios'
import reducer, { initialState } from '../reducers/api'
import { fetching, success, error } from '../actions/actionCreators'

const PokeApiRequest = ( endpoint, { verb = 'get', params = {} } = {}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const request = useCallback( async () => {
        dispatch(fetching())

        try {
            const response = await axios[verb](endpoint, params)
            dispatch(success(response))
        } catch (err) {
            dispatch(error(err))
        }
    }, [endpoint, verb, params])

    return [state, request]
}

export default PokeApiRequest