export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: string | null ) {
  return { type, payload };
}

type UserState = {
    username: string | null;
    id: string | null;
}

const initialState: UserState = { username: null, id: null };

export const login = ( username: string, id?: string ) => {
    return typedAction('user/LOGIN', username);
};

export const logout = () => {
    return typedAction('user/LOGOUT');
};

type UserAction = ReturnType<typeof login | typeof logout>;

export function userReducer(
    state = initialState,
    action: UserAction
): UserState {
    switch (action.type) {
        case 'user/LOGIN':
            return { username: action.payload, id: action.payload };
        case 'user/LOGOUT':
            return { username: null, id: null };
        default: 
            return state; 
    }
}