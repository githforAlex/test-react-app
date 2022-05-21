import React from "react";
import UserInfoBar from "./UserInfoBar";
import Pagination from "./Pagination";
import ReposBar from "./ReposBar";

function Content ({data, currentPage, setCurrentPage, paginate, repositories, lastItemIndex, firstItemIndex, getRepos}) {
    return(
        <div className="content">
            <div className="contentUserInfo">
            <UserInfoBar data={data}/>
            <ReposBar data={data} repositories={repositories}/>
            </div>
            <Pagination 
            totalItems={repositories.length} 
            paginate={paginate}
            data={data}
            lastItemIndex={lastItemIndex}
            firstItemIndex={firstItemIndex}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Content