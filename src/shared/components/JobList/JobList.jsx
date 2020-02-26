import React, { useEffect } from 'react'
import { connect } from "react-redux";

import { getJobs } from "../../../actions";

const JobList = ({ jobs, getJobs }) => {
    
    useEffect(() => {
        getJobs()
    }, [])

    return (
        <ul>
            {jobs.map(job => <li key={job.id}>{job.job_title}</li>)}
        </ul>
    )
}

const mapStateToProps = state => ({
    jobs: state.jobs
})

const mapDispatchToProps = {
    getJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);