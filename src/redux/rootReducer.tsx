import { combineReducers } from 'redux';
import { userReducer } from './modules/user'

export const rootReducer = combineReducers({
    userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;