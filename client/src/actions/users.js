import * as api from '../api/index';

// Action Creators - function return actions
// type: - kind of type useing in reducer
// payload: - data where we store all users
// double function for use REACT THUNK
export const getUsers = () => async (dispatch) => {

    try {
        // first we get response from API and we get DATA abject from backend
        const { data } = await api.fetchUsers();

        // comming from react thunk. And we response object of data from database
        dispatch({ 
            type: 'FETCH_ALL',
            payload: data
        })
    } catch (error) {
        console.log('Error client getUsers: ' + error.message)
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);

        dispatch({ 
            type: 'DELETE', 
            payload: id 
        });
    } catch (error) {
        console.log(error.message);
    }
};