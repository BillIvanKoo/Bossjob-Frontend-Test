import moment from 'moment';
import JobCard from './JobCard'

import pin from "../../../assets/images/pin.svg"
import briefcase from "../../../assets/images/briefcase.svg"
import education from "../../../assets/images/education.svg"
import clock from "../../../assets/images/clock.svg"

let job
let jobCard;

beforeEach(() => {
    job = {
            "id": 33236,
            "degree": "Diploma",
            "job_title": "Customer Service Representative",
            "job_type": "Full-time",
            "job_location": "Santa Rosa",
            "salary_range_from": 20000,
            "salary_range_to": 35000,
            "company_id": 11310,
            "company_name": "Conduit Global (A kgb Company)",
            "xp_lvl": "1 - 3 years",
            "refreshed_at": "2020-02-26 07:01:47",
            "is_salary_hidden": false,
            "updated_at": "2020-02-26 10:37:58",
            "expired_at": "2020-04-20 11:53:13",
            "company_logo": "https:\/\/assets.bossjob.com\/companies\/11310\/logo\/z2NiVMveJl6SQe0uZYKgwgxjOmXP4FsW3ICA3hJq.jpeg",  
    }
    jobCard = shallow(<JobCard job={job}/>)
})

describe('<JobCard>', () => {
    it('contains correct job title', () => {
        expect(jobCard.containsMatchingElement(<div className="JobTitle"><h4>Customer Service Representative</h4></div>)).toBeTruthy();
    })

    it('contains correct salary range', () => {
        expect(jobCard.containsMatchingElement(
            <p>
                ₱20k
                -
                ₱35k
            </p>
        )).toBeTruthy();
    })

    it('contains correct job location', () => {
        expect(jobCard.containsMatchingElement(
            <div className="FlexCenter">
                <img src={pin} className="Icon" alt="pin"/>
                <span>Santa Rosa</span>
            </div>
        )).toBeTruthy();
    })

    it('contains correct xp level', () => {
        expect(jobCard.containsMatchingElement(
            <div className="FlexCenter">
                <img src={briefcase} className="Icon" alt="briefcase"/>
                <span>1 - 3 years</span>
            </div>
        )).toBeTruthy();
    })

    it('contains correct degree', () => {
        expect(jobCard.containsMatchingElement(
            <div className="FlexCenter">
                <img src={education} className="Icon" alt="education"/>
                <span>Diploma</span>
            </div>
        )).toBeTruthy();
    })

    it('contains correct job type', () => {
        expect(jobCard.containsMatchingElement(
            <div className="FlexCenter">
                <img src={clock} className="Icon" alt="clock"/>
                <span>Full-time</span>
            </div>
        )).toBeTruthy();
    })

    it('contains correct company logo', () => {
        expect(jobCard.find(".CompanyLogo").prop('src'))
        .toEqual(job.company_logo);
    })

    it ('contains correct company name', () => {
        expect(jobCard.containsMatchingElement(
            <div className="Company">
                {job.company_name}
            </div>
        )).toBeTruthy();
    })

    it('contains correct updated day', () => {
        expect(jobCard.containsMatchingElement(
            <span style={{color: "rgba(0,0,0,0.3)"}}>{moment(job.updated_at).fromNow()}</span>
        )).toBeTruthy();
    })

})
