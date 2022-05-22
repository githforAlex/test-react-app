import React from "react";
import Rep from "./img/rep.png"

function ReposBar({data, repositories}) {
  if (data.public_repos !== 0) {  
    return(
    <div className="reposBar">
      {data.public_repos ? (<div className="reposbarTitle"><span>Repositories ({data.public_repos})</span></div>) : (<div></div>)}
      {repositories.map((repositories, i) => (
        <div className="reposItems" key={repositories.name}>
            <a className="reposLink" href={repositories.html_url} 
            rel="noopener noreferrer" target="_blank">{repositories.name}</a>
            <span className="repos_info">{repositories.description}</span>
          </div>
      ))}
    </div>
  )}
  return (
    <div className="emptyState">
      <div className="group_297">
        <img src={Rep} alt=""/>
        <span>Repository list is empty</span>
      </div>
    </div>
  )

}

export default ReposBar;