import { OPEN_DELETE_ITEM_MODAL, CLOSE_DELETE_ITEM_MODAL } from '../actions/types';

const initialState = {
    isDeleteItemModalOpen: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case OPEN_DELETE_ITEM_MODAL:
            return {
                ...state,
                isDeleteItemModalOpen: action.payload
            };
        case CLOSE_DELETE_ITEM_MODAL:
            return {
                ...state,
                isDeleteItemModalOpen: action.payload
            };
        default:
            return state;
    }
}