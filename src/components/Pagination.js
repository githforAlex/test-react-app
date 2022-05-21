import React, { useState, useEffect } from "react";
import Arrowl from "./img/arrowl.png"
import Arrowr from "./img/arrowr.png"


function Pagination ({paginate, data, lastItemIndex, firstItemIndex, currentPage, setCurrentPage}) {
    const pageNumbers = []


    for (let i = 1; i <= Math.ceil(data.public_repos / 4); i++){
        pageNumbers.push(i)
    }
    
    const [dropsNearButtons, setDropsNearButtons] = useState([])

    useEffect(() => {

        let tempNumberOfPages = [...dropsNearButtons]
        const dropsInitial = '...'
        const dropsLeft = '... '
        const dropsRight = ' ...'

        if (currentPage >= 1 && currentPage <=2){
            tempNumberOfPages = [1, 2, 3, dropsInitial, pageNumbers.length]
        }

        else if (currentPage === 3) {
            const drops = pageNumbers.slice(0, 3)
            tempNumberOfPages = [...drops, dropsInitial, pageNumbers.length]
        }

        else if (currentPage > 3 && currentPage < pageNumbers.length - 2) {
            const dropsPrev = pageNumbers.slice(currentPage - 2, currentPage)
            const dropsNext = pageNumbers.slice(currentPage, currentPage + 1)
            tempNumberOfPages = ([1, dropsLeft, ...dropsPrev, ...dropsNext, dropsRight, pageNumbers.length])
        }

        else if (currentPage > pageNumbers.length - 3) {
            const drops = pageNumbers.slice(pageNumbers.length - 3)
            tempNumberOfPages = ([1, dropsLeft, ...drops])
        }

        else if (currentPage === dropsInitial) {
            setCurrentPage(dropsNearButtons[dropsNearButtons.length - 3] + 1)
        }

        else if (currentPage === dropsLeft) {
            setCurrentPage(dropsNearButtons[3] - 2)
        }

        else if (currentPage === dropsRight) {
            setCurrentPage(dropsNearButtons[3] + 2)
        }

        setDropsNearButtons(tempNumberOfPages)
    }, [currentPage])

    if (pageNumbers.length === 0) {
        return (
            <div className="empty_repos"></div>
        )
    }
    return (

        <div className="paginationsContainer">
            <div className="paginationsInfo">
            <span className="itemsInfo">{firstItemIndex}-{{lastItemIndex} > data.public_repos ? (lastItemIndex) : (data.public_repos)}  of {data.public_repos} items</span>
            <a href="!#" className="arrow" 
            onClick={() => setCurrentPage((prev) => prev === 1 ? prev: prev - 1)}><img src={Arrowl} alt=""/></a>
            <ul className="paginations">
                {dropsNearButtons.map((number, index) => (
                    <li className="pageItem" key={index}>
                        <a href="!#" className={currentPage === number ? "active" : ''} 
                        onClick={() => {paginate(number); console.log(number)}} 
                        >
                        {number}
                        </a>
                    </li>
                ))}
            </ul>
            <a href="!#" className="arrow" 
            onClick={() => setCurrentPage((prev) => prev === pageNumbers.length ? prev : prev + 1)}><img src={Arrowr} alt=""/></a>
            </div>
        </div>
    )
}

export default Pagination