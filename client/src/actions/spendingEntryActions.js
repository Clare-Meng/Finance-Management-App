import axios from 'axios';
import { GET_SPENDING_ENTRIES, SPENDING_ENTRIES_LOADING } from './types';

export const getSpendingEntries = () => dispatch => {
    dispatch(setSpendingEntriesLoading());
    axios.get('/api/spendingEntry').then(res =>
        dispatch({
            type: GET_SPENDING_ENTRIES,
            payload: res.data
        })
    );
};

export const setSpendingEntriesLoading = () => {
    return {
        type: SPENDING_ENTRIES_LOADING
    }
}