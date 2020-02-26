import React, { useEffect } from 'react'
import { connect } from "react-redux";

import { getJobs } from "../../../actions";

const JobList = ({ jobs, total_num, loading }) => {

    return (
        !loading ?
            <div>
                {total_num} jobs found 
                <ul>
                    {jobs.map(job => <li key={job.id}>{job.job_title}</li>)}
                </ul>   
            </div>
        : null
    )
}

const mapStateToProps = ({jobs, total_num, loading}) => ({
    jobs,
    total_num,
    loading
})

const mapDispatchToProps = {
    getJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList);