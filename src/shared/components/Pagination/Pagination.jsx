import React, { useState } from 'react';
import { connect } from 'react-redux';

import "./Pagination.css"
import { changePage } from "../../../actions"

const Pagination = ({ page, changePage, total_pages }) => {

    function range(size, startAt) {
        return [...Array(size).keys()].map(i => i + startAt);
    }

    const handlePageRange = () => {
        if (page === 4){
            return range(6, 1)
        } else if (page === total_pages - 3){
            return range(6, total_pages - 5)
        } else if (page <= 3) {
            return range(5, 1)
        } else if (page >= total_pages - 3) {
            return range(5, total_pages - 4)
        } else {
            return range(5, page-2)
        }
    }

    return(
        <div className="Pagination">
            {page === 1 ? <></> : <button onClick={()=>{changePage(page-1)}}>{"<"}</button>}
            {page > 4 ? <><button onClick={()=>{changePage(1)}}>1</button><button disabled>...</button></>:<></>}
            {handlePageRange().map(pageNo => (
                <button className={pageNo===page?"active":null} key={pageNo} onClick={()=>{changePage(pageNo)}}>{pageNo}</button>
            ))}
            {page < total_pages - 3 ? <><button disabled>...</button><button onClick={()=>{changePage(total_pages)}}>{total_pages}</button></>:<></>}
            {page === total_pages ?  <></>:<button onClick={()=>{changePage(page+1)}}>{">"}</button>}
        </div>
    )
    
}

const mapStateToProps = ({ page, total_pages }) => ({
    page,
    total_pages,
})

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)