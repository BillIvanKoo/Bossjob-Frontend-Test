import { put, takeLatest, all, select } from 'redux-saga/effects';
import { JOBS_RECEIVED, GET_JOBS, JOBS_REQUEST_FAILED } from '../actions/constants';

function* fetchJobs() {
    const { page, query, size } = yield select(state=>state);
    try {
        const json = yield fetch(`https://search.bossjob.com/api/v1/search/job_filter?size=${size}&page=${page}${query?"&query="+query:""}`);
        const data = (yield json.json()).data;
        
        yield put({
            type: JOBS_RECEIVED,
            data
        });
    } catch (error) {
        yield put({
            type: JOBS_REQUEST_FAILED,
            error
        })
    }
}

function* actionWatcher() {
    yield takeLatest(GET_JOBS, fetchJobs);
}

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}