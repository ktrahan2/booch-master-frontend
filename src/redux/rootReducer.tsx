import { combineReducers } from 'redux';
import { userReducer } from './modules/user'
import { isSigningInReducer } from './modules/isSigningIn'

export const rootReducer = combineReducers({
    userReducer,
    isSigningInReducer,
});

export type RootState = ReturnType<typeof rootReducer>;