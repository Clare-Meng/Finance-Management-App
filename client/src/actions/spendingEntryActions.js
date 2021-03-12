import axios from 'axios';
import { GET_SPENDING_ENTRIES } from './types';

export const getSpendingEntries = () => dispatch => {
    console.log("POINT REACHED")
    axios.get('/api/spendingEntry').then(res =>
        dispatch({
            type: GET_SPENDING_ENTRIES,
            payload: res.data
        })
    );
};