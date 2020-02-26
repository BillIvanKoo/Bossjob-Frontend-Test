import { GET_JOBS, JOBS_RECEIVED, CHANGE_QUERY, CHANGE_PAGE } from "../actions/constants"

const initialState = {
    jobs: [],
    loading: false,
    page: 1,
    total_num: 0,
    total_pages: 0,
    size: 12,
    query: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return { ...state, loading: true};
        case JOBS_RECEIVED:
            const { page, total_num, jobs, total_pages } = action.data
            console.log(action.data);
            
            return {
                ...state,
                loading: false,
                jobs,
                page,
                total_num,
                total_pages
            }
        case CHANGE_QUERY:
            return {
                ...state,
                query: action.query
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.page
            }
        default:
            return state;
    }
}