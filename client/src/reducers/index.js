import { combineReducers } from 'redux';
import spendingEntryReducer from './spendingEntryReducer';
import deleteSpendingEntryModalReducer from './deleteSpendingEntryModalReducer.js';

export default combineReducers({
    spendingEntry: spendingEntryReducer,
    deleteSpendingEntryModal: deleteSpendingEntryModalReducer
});