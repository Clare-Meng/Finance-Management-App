import { combineReducers } from 'redux';
import spendingEntryReducer from './spendingEntryReducer';

export default combineReducers({
    spendingEntry: spendingEntryReducer
});