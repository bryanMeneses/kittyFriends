import { GET_KITTIES } from './types'
import axios from 'axios'

export const getKitties = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = res.data

    dispatch({
        type: GET_KITTIES,
        payload: data
    })
}