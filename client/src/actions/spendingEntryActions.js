import axios from 'axios';
import { GET_SPENDING_ENTRIES } from './types';

export const getSpendingEntries = () => dispatch => {
    axios.get('/api/spendingEntry').then(res =>
        dispatch({
            type: GET_SPENDING_ENTRIES,
            payload: res.data
        })
    );
};