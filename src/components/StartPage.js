import React from "react";
import Image from "./img/image.png"

function StartPage(){

    return(
        <div className="startPage">
            <div className="group_299">
                <img src={Image} alt=""/>
                <span>Start with searching a GitHub user</span>
            </div>
        </div>
    )
}

export default StartPage;

