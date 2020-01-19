// user

export const GET_ALL_USERS = 'GET_ALL_USERS';
export const getAllUsers = (iPage, pageSize) => ({
    type: GET_ALL_USERS,
    payload: { iPage, pageSize }
});

export const ALL_USERS_RECEIVED = 'ALL_USERS_RECEIVED';
export const usersReceived = (all) => ({
    type: ALL_USERS_RECEIVED,
    payload: { all }
});

export const GET_USER = 'GET_USER';
export const getUser = (username) => ({
    type: GET_USER,
    payload: { username }
});

export const USER_RECEIVED = 'USER_RECEIVED';
export const currentUserRecieved = (currentUser) => ({
    type: USER_RECEIVED,
    payload: { currentUser }
});


// page

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const updatePage = (iPage) => ({
    type: UPDATE_PAGE,
    payload: { iPage }
})