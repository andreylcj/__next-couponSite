
export const loadingActionStart = () => async (dispatch) => {
    dispatch({
        type: 'START',
    });
}

export const loadingActionEnd = () => async (dispatch) => {
    dispatch({
        type: 'END',
    });
}

export const loadingRegisterAndLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case 'START':
            return {
                loading: true,
            }
        case 'END':
            return {
                loading: false,
            }
        default:
            return state;
    }
}