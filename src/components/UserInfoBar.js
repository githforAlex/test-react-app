import React from "react";
import Shared from "./img/shared.png"
import Provate from "./img/provate.png"

function UserInfoBar({data}) {

  const followers = (data.followers/1000).toFixed(1) + "k"
  const following = (data.following/1000).toFixed(1) + "k"

  return (
    <div className="UserInfoBar">
        <div className="userInfoCard">
            {data.avatar_url ? (<div className="user_avatar">
            <img className="userAvatar" src={data.avatar_url} alt="avatar" /></div>) : (<div></div>)}
              <div className="userInfo">  
                {data.name ? (<div className="userName">
                <span id="name">{data.name}</span></div>) : (<div></div>)}
                {data.avatar_url ? (<div className="userLink">
                <a href={data.html_url} 
                className="reposLink" rel="noopener noreferrer" 
                target="_blank">{data.login}</a></div>) : (<div></div>)}
                <div className="followers">
                {data.followers ? (<div className="dataitem">
                <img src={Shared} alt=""/>
                <span id="followers">{data.followers > 1000 ? (followers) : (data.followers)} followers</span></div>) : (<div></div>)}
                {data.following ? (<div className="dataitem">
                <img src={Provate} alt=""/>
                <span span id="following">{data.following > 1000 ? (following) : (data.following)} following</span></div>) : (<div></div>)}
              </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfoBar;