// when we want create more than 1 reducer good use that to callback all ours reducers
import { combineReducers } from "redux";

import users from './users';

export default combineReducers({
    users,
});