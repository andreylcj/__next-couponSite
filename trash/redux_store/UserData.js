
export const userDataActionUpdate = (dataUpdate) => async (dispatch) => {
    dispatch({
        type: 'UPDATE_USER_DATA',
        payload: dataUpdate
    });
}

export const userDataReducer = (state =
    {
        userData:
            { email: '', password: '' }
    }, action) => {
    switch (action.type) {
        case 'UPDATE_USER_DATA':
            return {
                userData: {
                    ...state.userData,
                    ...action.payload,
                }
            }
        default:
            return state;
    }
}