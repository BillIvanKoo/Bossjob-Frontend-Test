import React from 'react'
import { connect } from "react-redux";

import "./JobList.css";
import { getJobs } from "../../../actions";
import JobCard from '../JobCard';

const JobList = ({ jobs, total_num, loading }) => {

    return (
        !loading ?
            <div className="JobList">
                <div className="JobsFound">{total_num} jobs found</div> 
                <div>
                    {jobs.map(job => <JobCard key={job.id} job={job}/>)}
                </div>   
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