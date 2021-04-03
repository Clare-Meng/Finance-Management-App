import { OPEN_DELETE_ITEM_MODAL, CLOSE_DELETE_ITEM_MODAL } from './types';

export const openDeleteItemModal = () => dispatch => {
    dispatch(setOpenDeleteItemModal());
};

export const closeDeleteItemModal = () => dispatch => {
    dispatch(setCloseDeleteItemModal());
};

export const setOpenDeleteItemModal = () => {
    return {
        type: OPEN_DELETE_ITEM_MODAL,
        payload: true
    }
}

export const setCloseDeleteItemModal = () => {
    return {
        type: CLOSE_DELETE_ITEM_MODAL,
        payload: false
    }
}

