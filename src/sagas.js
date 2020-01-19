import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as Api from './api';
import * as actions from './actions';
import * as storage from './localStorage';

function* getAllUsers(action) {
    yield put(actions.usersReceived(storage.getItem('gh-users') || []));
    const res = yield call(Api.fetchAllUsers, action.payload.iPage * action.payload.pageSize);

    storage.setItem('gh-users', res);
    yield put(actions.usersReceived(res));
}

function* getUser(action) {
    const res = yield call(Api.fetchUser, action.payload.username);
    yield put(actions.currentUserRecieved(res));
}
function* actionWatcher() {
    yield takeLatest(actions.GET_ALL_USERS, getAllUsers);
    yield takeLatest(actions.GET_USER, getUser);
}

export default function* rootSaga() {
    yield all([actionWatcher()]);
}
