import { GET_JOBS, CHANGE_QUERY, CHANGE_PAGE } from "./constants";

export const getJobs = () => ({
    type: GET_JOBS,
})

export const changeQuery = (query) => ({
    type: CHANGE_QUERY,
    query
})

export const changePage = (page) => ({
    type: CHANGE_PAGE,
    page
})