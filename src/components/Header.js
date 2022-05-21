import React from "react";
import Vector from "./img/Vector.svg";

function Header ({getInfo, onChange, username}) {
    
    return(
        <div className="header">
            <div className="searchbar">
                <img className="logo" src={Vector} alt="logo"/>
                <form onSubmit={getInfo}>
                    <input 
                    className="searchbarInput"
                    placeholder="Enter GitHub username"
                    type="text"
                    value={username}
                    onChange={onChange}
                    />
                </form>
            </div>
        </div>
    )
}

export default Header

// e = value(e.target.value)