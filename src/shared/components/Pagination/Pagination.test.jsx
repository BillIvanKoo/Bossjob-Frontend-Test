import { Pagination } from './Pagination'

const total_pages = 10

describe('<Pagination>', () => {
    it('should return null when there is error', () => {
        const pagination = shallow(<Pagination errorProps={'err_msg'}/>)

        expect(pagination.type()).toEqual(null)
    })

    it('should return null when loading', () => {
        const pagination = shallow(<Pagination errorProps={null} loading={true}/>)

        expect(pagination.type()).toEqual(null)
    })

    it('should not render < when at page 1', () => {
        const pagination = shallow(<Pagination page={1} total_pages={total_pages} errorProps={null}/>)
    
        expect(pagination.find('button[children="<"]')).toHaveLength(0)
    })

    it('should render < when not at page 1', () => {
        const pagination = shallow(<Pagination page={2} total_pages={total_pages} errorProps={null}/>)

        expect(pagination.find('button[children="<"]')).toHaveLength(1)
    })

    it('should not render > when at last page', () => {
        const pagination = shallow(<Pagination  page={total_pages} total_pages={total_pages} errorProps={null}/>)
    
        expect(pagination.find('button[children=">"]')).toHaveLength(0)
    })

    it('should render > when not at last page', () => {
        const pagination = shallow(<Pagination  page={1} total_pages={total_pages} errorProps={null}/>)
       
        expect(pagination.find('button[children=">"]')).toHaveLength(1)
    })

    it('should render all pages when total pages <= 5', () => {
        const pagination = shallow(<Pagination page={1} total_pages={4} errorProps={null}/>)

        expect(pagination.find('button[children=1]')).toHaveLength(1)
        expect(pagination.find('button[children=2]')).toHaveLength(1)
        expect(pagination.find('button[children=3]')).toHaveLength(1)
        expect(pagination.find('button[children=4]')).toHaveLength(1)
    })

    it('should render page 1-6 when at page 4', () => {
        const pagination = shallow(<Pagination page={4} total_pages={total_pages} errorProps={null}/>)

        expect(pagination.find('button[children=1]')).toHaveLength(1)
        expect(pagination.find('button[children=2]')).toHaveLength(1)
        expect(pagination.find('button[children=3]')).toHaveLength(1)
        expect(pagination.find('button[children=4]')).toHaveLength(1)
        expect(pagination.find('button[children=5]')).toHaveLength(1)
        expect(pagination.find('button[children=6]')).toHaveLength(1)
    })

    it('should render last page - 5 to last page when at last page - 3', () => {
        const pagination = shallow(<Pagination page={7} total_pages={total_pages} errorProps={null}/>)
    
        expect(pagination.find('button[children=5]')).toHaveLength(1)
        expect(pagination.find('button[children=6]')).toHaveLength(1)
        expect(pagination.find('button[children=7]')).toHaveLength(1)
        expect(pagination.find('button[children=8]')).toHaveLength(1)
        expect(pagination.find('button[children=9]')).toHaveLength(1)
        expect(pagination.find('button[children=10]')).toHaveLength(1)
    })

    it('should render 1 - 5 when at page <= 3', () => {
        const pagination = shallow(<Pagination page={2} total_pages={total_pages} errorProps={null}/>)
        
        expect(pagination.find('button[children=1]')).toHaveLength(1)
        expect(pagination.find('button[children=2]')).toHaveLength(1)
        expect(pagination.find('button[children=3]')).toHaveLength(1)
        expect(pagination.find('button[children=4]')).toHaveLength(1)
        expect(pagination.find('button[children=5]')).toHaveLength(1)
    })

    it('should render last page - 4 to last page when at >= last page - 3', () => {
        const pagination = shallow(<Pagination page={total_pages-1} total_pages={total_pages} errorProps={null}/>)
        
        
        expect(pagination.find('button[children=6]')).toHaveLength(1)
        expect(pagination.find('button[children=7]')).toHaveLength(1)
        expect(pagination.find('button[children=8]')).toHaveLength(1)
        expect(pagination.find('button[children=9]')).toHaveLength(1)
        expect(pagination.find('button[children=10]')).toHaveLength(1)
    })

    it('should render +-2 from the current page when 4 < page < last page - 3', () => {
        const pagination = shallow(<Pagination page={5} total_pages={total_pages} errorProps={null}/>)
        
        expect(pagination.find('button[children=3]')).toHaveLength(1)
        expect(pagination.find('button[children=4]')).toHaveLength(1)
        expect(pagination.find('button[children=5]')).toHaveLength(1)
        expect(pagination.find('button[children=6]')).toHaveLength(1)
        expect(pagination.find('button[children=7]')).toHaveLength(1)
    })

    it('should call the corresponding changePage when page number is clicked', () => {
        const changePageMock = jest.fn()
        const pagination = shallow(<Pagination page={5} total_pages={total_pages} errorProps={null} changePage={changePageMock}/>)
        pagination.find('button[children=3]').simulate('click')
        expect(changePageMock).toBeCalledWith(3)

        pagination.find('button[children=6]').simulate('click')
        expect(changePageMock).toBeCalledWith(6)
    })

    it('should call changePage(page+1) when > is clicked', () => {
        const changePageMock = jest.fn()
        const pagination = shallow(<Pagination page={5} total_pages={total_pages} errorProps={null} changePage={changePageMock}/>)
        pagination.find('button[children=">"]').simulate('click')
        expect(changePageMock).toBeCalledWith(6)
    })

    it('should call changePage(page-1) when < is clicked', () => {
        const changePageMock = jest.fn()
        const pagination = shallow(<Pagination page={5} total_pages={total_pages} errorProps={null} changePage={changePageMock}/>)
        pagination.find('button[children="<"]').simulate('click')
        expect(changePageMock).toBeCalledWith(4)
    })

    it('should always have page 1 and last page', () => {
        const pagination = shallow(<Pagination page={5} total_pages={total_pages} errorProps={null}/>)

        expect(pagination.find('button[children="1"]')).toHaveLength(1)
        expect(pagination.find('button[children=10]')).toHaveLength(1)
    })

})
