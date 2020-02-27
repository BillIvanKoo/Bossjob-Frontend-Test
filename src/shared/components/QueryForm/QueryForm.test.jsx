import { QueryForm } from './QueryForm'

describe('<QueryForm>', () => {
    it("should have an input and a button", () => {
        const queryForm = shallow(<QueryForm/>)

        expect(queryForm.find('input')).toHaveLength(1)
        expect(queryForm.find('button')).toHaveLength(1)
    })

    it("should call changeQuery on input change", () => {
        const changeQueryMock = jest.fn()
        const queryForm = shallow(<QueryForm changeQuery={changeQueryMock}/>)
        const event = {
            target: {
                value: "1234"
            }
        }

        queryForm.find('input').simulate('change', event)
        expect(changeQueryMock.mock.calls[0][0]).toBe('1234')
    })

    it("should call changePage(1), when page != 1, on keypress enter", () => {
        const changePageMock = jest.fn()
        const queryForm = shallow(<QueryForm changePage={changePageMock} page={2}/>)

        queryForm.find('input').simulate('keypress', {key: "Enter"})
        expect(changePageMock).toBeCalled()
    })

    it("should call changePage(1), when page != 1, on button click", () => {
        const changePageMock = jest.fn()
        const queryForm = shallow(<QueryForm changePage={changePageMock} page={2}/>)

        queryForm.find('button').simulate('click')
        expect(changePageMock).toBeCalled()
    })

    it("should call getJobs(), when page == 1, on keypress enter", () => {
        const getJobsMock = jest.fn()
        const queryForm = shallow(<QueryForm getJobs={getJobsMock} page={1}/>)

        queryForm.find('input').simulate('keypress', {key: "Enter"})
        expect(getJobsMock).toBeCalled()
    })

    it("should call getJobs(), when page == 1, on button click", () => {
        const getJobsMock = jest.fn()
        const queryForm = shallow(<QueryForm getJobs={getJobsMock} page={1}/>)

        queryForm.find('button').simulate('click')
        expect(getJobsMock).toBeCalled()
    })

    it("should throttle submission", () => {
        const getJobsMock = jest.fn()
        const queryForm = shallow(<QueryForm getJobs={getJobsMock} page={1}/>)

        queryForm.find('input').simulate('keypress', {key: "Enter"})
        queryForm.find('input').simulate('keypress', {key: "Enter"})
        queryForm.find('input').simulate('keypress', {key: "Enter"})
        expect(getJobsMock.mock.calls.length).toBe(1)
    })
})
