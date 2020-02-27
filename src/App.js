import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './shared/components/Header'
import JobList from './shared/components/JobList';
import Pagination from './shared/components/Pagination';
import { getJobs } from './actions'
import Loading from './shared/components/Loading';
import QueryForm from './shared/components/QueryForm';

export const App = ({page, getJobs}) => {

  useEffect(() => {
    getJobs()
  }, [page])

  return (
    <div className="App">
      <div className="App-Wrapper">
        <Header />
        <div style={{padding: '10px 20px'}}>
          <QueryForm/>
          <JobList/>
          <Loading/>
          <Pagination/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({page}) => ({
  page
})

const mapDispatchToProps = {
  getJobs
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
