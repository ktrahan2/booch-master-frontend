type UserState = {
    username: string | null;
}

const initialState: UserState = { username: null };

const login = ( username: string ) => ({
    type: 'user/LOGIN',
    payload: username
});

const logout = () => ({
    type: 'user/LOGOUT'
});