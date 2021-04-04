import { OPEN_ADD_SPENDING_ENTRY_MODAL, CLOSE_ADD_SPENDING_ENTRY_MODAL } from '../actions/types';

const initialState = {
    isAddSpendingEntryModalOpen: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case OPEN_ADD_SPENDING_ENTRY_MODAL:
            return {
                ...state,
                isAddSpendingEntryModalOpen: action.payload
            };
        case CLOSE_ADD_SPENDING_ENTRY_MODAL:
            return {
                ...state,
                isAddSpendingEntryModalOpen: action.payload
            };
        default:
            return state;
    }
}