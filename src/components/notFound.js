import React from "react";
import User from "./img/user.png";

function notFound() {

    return (
        <div className="notFound">
            <div className="group_298">
                <img src={User} alt=""/>
                <span>User not found</span>
            </div>
        </div>
    )
}

export default notFound