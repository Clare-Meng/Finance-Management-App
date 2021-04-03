import { OPEN_DELETE_SPENDING_ENTRY_MODAL, CLOSE_DELETE_SPENDING_ENTRY_MODAL } from '../actions/types';

const initialState = {
    isDeleteSpendingEntryModalOpen: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case OPEN_DELETE_SPENDING_ENTRY_MODAL:
            return {
                ...state,
                isDeleteSpendingEntryModalOpen: action.payload
            };
        case CLOSE_DELETE_SPENDING_ENTRY_MODAL:
            return {
                ...state,
                 isDeleteSpendingEntryModalOpen: action.payload
            };
        default:
            return state;
    }
}