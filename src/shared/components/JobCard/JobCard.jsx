import React from 'react';
import moment from "moment";

import "./JobCard.css"

import pin from "../../../assets/images/pin.svg"
import briefcase from "../../../assets/images/briefcase.svg"
import education from "../../../assets/images/education.svg"
import clock from "../../../assets/images/clock.svg"

export default ({job}) => {
    return (
        <div className="JobCard">
            <div className="FlexCenter SpaceBetween">
                <div className="JobTitle"><h4>{job.job_title}</h4></div>
                <p>
                    ₱{job.salary_range_from/1000}k
                    -
                    ₱{job.salary_range_to/1000}k
                </p>
            </div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <div className="FlexCenter">
                                    <img src={pin} className="Icon" alt="pin"/>
                                    <span>{job.job_location}</span>
                                </div>
                            </td>
                            <td>
                                <div className="FlexCenter">
                                    <img src={briefcase} className="Icon" alt="briefcase"/>
                                    <span>{job.xp_lvl}</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="FlexCenter">
                                    <img src={education} className="Icon" alt="education"/>
                                    <span>{job.degree}</span>
                                </div>
                            </td>
                            <td>
                                <div className="FlexCenter">
                                    <img src={clock} className="Icon" alt="clock"/>
                                    <span>{job.job_type}</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="CompanyTimeWrapper FlexCenter SpaceBetween">
                
                <img src={job.company_logo} className="CompanyLogo" alt={job.company_name}/>
                <div className="Company">
                    {job.company_name}
                </div>
                
                <span style={{color: "rgba(0,0,0,0.3)"}}>{moment(job.updated_at).fromNow()}</span>
            </div>
        </div>
    )
}