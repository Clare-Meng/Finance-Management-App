import { GET_SPENDING_ENTRIES, SPENDING_ENTRIES_LOADING } from '../actions/types';

const initialState = {
    spendingEntries: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SPENDING_ENTRIES:
            return {
                ...state,
                spendingEntries: action.payload,
                loading: false
            };
        case SPENDING_ENTRIES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}