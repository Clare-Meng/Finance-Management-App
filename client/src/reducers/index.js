import { combineReducers } from 'redux';
import spendingEntryReducer from './spendingEntryReducer';
import deleteSpendingEntryModalReducer from './deleteSpendingEntryModalReducer.js';
import deleteItemModalReducer from './deleteItemModalReducer';

export default combineReducers({
    spendingEntry: spendingEntryReducer,
    deleteSpendingEntryModal: deleteSpendingEntryModalReducer,
    deleteItemModal: deleteItemModalReducer
});