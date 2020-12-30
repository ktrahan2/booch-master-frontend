export function typedAction<T extends string>(type: T): { type: T };
export function typedAction<T extends string, P extends any>(
  type: T,
  payload: P
): { type: T; payload: P };
export function typedAction(type: string, payload?: any) {
  return { type, payload };
}

type SigningInState = {
    isSigningIn: boolean | null;
}

const initialState: SigningInState = { isSigningIn: false };

export const setSigningIn = ( isSigningIn: boolean ) => {
    return typedAction('showForm', isSigningIn);
};

type isSigningInAction = ReturnType<typeof setSigningIn>;

export function isSigningInReducer(
    state = initialState,
    action: isSigningInAction
): SigningInState {
    switch ( action.type ) {
        case 'showForm':
            return { isSigningIn: action.payload };
        default: 
            return state;
    }
}