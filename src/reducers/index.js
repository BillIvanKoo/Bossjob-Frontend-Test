import { GET_JOBS, JOBS_RECEIVED } from "../actions/constants"

const initialState = {
    jobs: [],
    loading: false,
    page: 1,
    total_num: 0,
    size: 12,
    query: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return { ...state, loading: true};
        case JOBS_RECEIVED:
            const { page, total_num, jobs } = action.data
            console.log(action.data);
            
            return {
                ...state,
                loading: false,
                jobs,
                page,
                total_num
            }
        default:
            return state;
    }
}