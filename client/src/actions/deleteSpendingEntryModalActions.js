import { OPEN_DELETE_SPENDING_ENTRY_MODAL, CLOSE_DELETE_SPENDING_ENTRY_MODAL } from './types';

export const openDeleteSpendingEntryModal = () => dispatch => {
    dispatch(setOpenDeleteSpendingEntryModal());
};

export const closeDeleteSpendingEntryModal = () => dispatch => {
    dispatch(setCloseDeleteSpendingEntryModal());
};

export const setOpenDeleteSpendingEntryModal = () => {
    return {
        type: OPEN_DELETE_SPENDING_ENTRY_MODAL,
        payload: true
    }
}

export const setCloseDeleteSpendingEntryModal = () => {
    return {
        type: CLOSE_DELETE_SPENDING_ENTRY_MODAL,
        payload: false
    }
}