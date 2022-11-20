export const stringMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'string') {
        return dispatch({type: action})     
    } else {
        return dispatch(action)
    }
}