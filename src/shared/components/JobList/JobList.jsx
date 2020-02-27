import React from 'react'
import { connect } from "react-redux";

import "./JobList.css";
import JobCard from '../JobCard';

const JobList = ({ jobs, total_num, loading, errorProps }) => {

    return (
        !loading ?
        ( errorProps ?
            <div>
                <h2>Something went wrong.</h2>
                <p>We are working on getting this fixed as soon as we can. You may be able to try again.</p>
            </div>
        : 
            <div className="JobList">
                <div className="JobsFound">{total_num} jobs found</div> 
                <div>
                    {jobs.map(job => <JobCard key={job.id} job={job}/>)}
                </div>   
            </div>
        ) : null
    )
}

const mapStateToProps = ({jobs, total_num, loading, error}) => ({
    jobs,
    total_num,
    loading,
    errorProps: error
})

export default connect(mapStateToProps, null)(JobList);