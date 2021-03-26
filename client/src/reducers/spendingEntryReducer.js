import { GET_SPENDING_ENTRIES, DELETE_SPENDING_ENTRY, SPENDING_ENTRIES_LOADING, DELETE_ITEM, ADD_SPENDING_ENTRY } from '../actions/types';

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
        case DELETE_SPENDING_ENTRY:
            return {
                ...state,
                spendingEntries: state.spendingEntries.filter(spendingEntry => spendingEntry._id !== action.payload)
            };
        case ADD_SPENDING_ENTRY:
            return {
                ...state,
                spendingEntries: [action.payload, ...state.spendingEntries]
            };
        case DELETE_ITEM:
            return {
                ...state,
                spendingEntries: state.spendingEntries
            }
        case SPENDING_ENTRIES_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}