import { OPEN_ADD_SPENDING_ENTRY_MODAL, CLOSE_ADD_SPENDING_ENTRY_MODAL } from './types';

export const openAddSpendingEntryModal = () => dispatch => {
    dispatch(setOpenAddSpendingEntryModal());
};

export const closeAddSpendingEntryModal = () => dispatch => {
    dispatch(setCloseAddSpendingEntryModal());
};

export const setOpenAddSpendingEntryModal = () => {
    return {
        type: OPEN_ADD_SPENDING_ENTRY_MODAL,
        payload: true
    }
}

export const setCloseAddSpendingEntryModal = () => {
    return {
        type: CLOSE_ADD_SPENDING_ENTRY_MODAL,
        payload: false
    }
}

