import React from 'react';
import { connect } from 'react-redux';

import "./Pagination.css"
import { changePage } from "../../../actions"

const Pagination = ({ page, changePage, total_pages, errorProps }) => {

    function range(size, startAt) {
        return [...Array(size).keys()].map(i => i + startAt);
    }

    const handlePageRange = () => {
        if (total_pages < 5) {
            return range(total_pages, 1)
        }
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
        errorProps === null ?
            <div className="Pagination">
                {page === 1 ? <></> : <button onClick={()=>{changePage(page-1)}}>{"<"}</button>}
                {page > 4 ? <><button onClick={()=>{changePage(1)}}>1</button><button disabled>...</button></>:<></>}
                {handlePageRange().map(pageNo => (
                    <button className={pageNo===page?"active":null} key={pageNo} onClick={()=>{changePage(pageNo)}}>{pageNo}</button>
                ))}
                {page < total_pages - 3 ? <><button disabled>...</button><button onClick={()=>{changePage(total_pages)}}>{total_pages}</button></>:<></>}
                {page === total_pages || !(total_pages > 0) ?  <></>:<button onClick={()=>{changePage(page+1)}}>{">"}</button>}
            </div>
        : null
    )
    
}

const mapStateToProps = ({ page, total_pages, error }) => ({
    page,
    total_pages,
    errorProps: error
})

const mapDispatchToProps = {
    changePage
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)