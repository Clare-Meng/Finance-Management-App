import { GET_SPENDING_ENTRIES } from '../actions/types';

const initialState = {
    spendingEntries: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SPENDING_ENTRIES:
            return {
                ...state,
                spendingEntries: action.payload
            };
        default:
            return state;
    }
}