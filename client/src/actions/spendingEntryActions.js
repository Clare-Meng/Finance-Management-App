import axios from 'axios';
import { GET_SPENDING_ENTRIES, DELETE_SPENDING_ENTRY, SPENDING_ENTRIES_LOADING, DELETE_ITEM, ADD_SPENDING_ENTRY } from './types';

export const getSpendingEntries = () => dispatch => {
    dispatch(setSpendingEntriesLoading());
    axios.get('/api/spendingEntry').then(res =>
        dispatch({
            type: GET_SPENDING_ENTRIES,
            payload: res.data
        })
    );
};

export const deleteSpendingEntry = (id) => dispatch => {
    axios.delete(`/api/spendingEntry/${id}`).then(res =>
        dispatch({
            type: DELETE_SPENDING_ENTRY,
            payload: id
        })
    );
};

export const addSpendingEntry = (spendingEntry) => dispatch => {
    axios
        .post('/api/spendingEntry', spendingEntry)
        .then(res => dispatch({
            type: ADD_SPENDING_ENTRY,
            payload: res.data
        }))
};

export const setSpendingEntriesLoading = () => {
    return {
        type: SPENDING_ENTRIES_LOADING
    }
}

export const deleteItem = (id) => dispatch => {
    axios.delete(`/api/spendingEntry/item/${id}`).then(res =>
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    );
};