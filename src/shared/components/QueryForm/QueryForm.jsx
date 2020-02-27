import React, { useState } from 'react'
import { connect } from 'react-redux';
import search from "../../../assets/images/search.svg";

import "./QueryForm.css";
import { changeQuery, changePage, getJobs } from "../../../actions";

const QueryForm = ({query, changeQuery, changePage, page, getJobs}) => {
    const [submitThrottle, setSubmitThrottle] = useState(null);
    
    const handleSubmit = () => {
        if (submitThrottle === null) {
            page === 1 ? getJobs() : changePage(1);
            setSubmitThrottle(setTimeout(()=>{
                setSubmitThrottle(null)
            }, 1000))
        } 
    }
    
    return (
        <div className="QueryForm">
            <input
                placeholder="Search for job title or company name"
                value={query}
                onChange={e=>{changeQuery(e.target.value)}}
                style={{
                    background: `url(${search}) left top / 18px 18px no-repeat`
                }}
                onKeyPress={e=>{if (e.key === "Enter") handleSubmit()}}
            />
            <button onClick={handleSubmit}>Filter results</button>
        </div>
    )
}

const mapStateToProps = ({query, page}) => ({
    query,
    page
})

const mapDispatchToProps = {
    changeQuery,
    changePage,
    getJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryForm)