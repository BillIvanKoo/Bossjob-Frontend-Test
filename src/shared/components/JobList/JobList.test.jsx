import { JobList } from "./JobList";
import JobCard from "../JobCard";

describe('<JobList>', () => {
    it("renders nothing when loading", () => {
        const jobList = shallow(<JobList loading={true}/>)

        expect(jobList.type()).toEqual(null)
    })

    it("renders error message when there is an error", () => {
        const jobList = shallow(<JobList loading={false} errorProps={"err_msg"}/>)

        expect(jobList.containsMatchingElement(<h2>Something went wrong.</h2>)).toBeTruthy()
    })


    it('renders 0 jobs when there are no jobs', () => {
        const jobList = shallow(<JobList loading={false} jobs={[]} total_num={0}/>)

        expect(jobList.containsMatchingElement(<div className="JobsFound">0 jobs found</div>)).toBeTruthy()
        expect(jobList.find(JobCard)).toHaveLength(0)
    })

    it('renders list of jobs', () => {
        let jobs = [{id: 1}, {id: 2}, {id: 3}]
        const jobList = shallow(<JobList loading={false} jobs={jobs} total_num={jobs.length}/>)

        expect(jobList.containsMatchingElement(<div className="JobsFound">3 jobs found</div>)).toBeTruthy()
        expect(jobList.find(JobCard)).toHaveLength(3)
    })
})
