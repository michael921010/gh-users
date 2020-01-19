import {
    ALL_USERS_RECEIVED, USER_RECEIVED,
    UPDATE_PAGE,
} from "./actions";
import { combineReducers } from 'redux';

const userState = {
    all: [],
    currentUser: null,
};

const usersReucer = (state = userState, action) => {
    switch (action.type) {
        case ALL_USERS_RECEIVED:
        case USER_RECEIVED:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

const pageState = {
    iPage: 0,
    pageSize: 30,
};

const pageReducer = (state = pageState, action) => {
    switch (action.type) {
        case UPDATE_PAGE:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};

// Combine Reducer
const Reducer = combineReducers({
    users: usersReucer,
    page: pageReducer,
})

export default Reducer;