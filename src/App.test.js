import { App } from './App';
import Header from "./shared/components/Header";
import QueryForm from './shared/components/QueryForm';
import JobList from './shared/components/JobList';
import Pagination from './shared/components/Pagination';
import Loading from './shared/components/Loading';

let app

beforeEach(() => {
  app = shallow(<App/>)
})

describe("<App>", ()=>{
  it('renders without crashing', () => {
    shallow(<App/>)
  });

  it('renders a Header', () => {
    expect(app.contains(<Header/>)).toBeTruthy();
  })
  
  it('renders a QueryForm', () => {
    expect(app.contains(<QueryForm/>)).toBeTruthy();
  })

  it('renders a JobList', () => {
    expect(app.contains(<JobList/>)).toBeTruthy();
  })
  
  it('renders a Loading', () => {
    expect(app.contains(<Loading/>)).toBeTruthy();
  })

  it('renders a Pagination', () => {
    expect(app.contains(<Pagination/>)).toBeTruthy();
  })
  
})
