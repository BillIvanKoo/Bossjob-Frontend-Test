import React from 'react';
import { connect } from 'react-redux';
import "./Loading.css";
import img from '../../../assets/images/ring-preloader.gif';

export const Loading = ({ loading }) => (
    loading ?
        <div className="loaderContainer">
            <img src={img} alt='loading' />
        </div> 
    : null
);

const mapStateToProps = ({ loading }) => ({loading})

export default connect(mapStateToProps,null)(Loading);