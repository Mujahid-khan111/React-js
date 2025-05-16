import React, { useState } from "react";

const StateTutorial = () => {

    const [inputVlaue, newValue] = useState("hello")
    //  console.log(inputVlaue);
     
    return (
        <div>
            <input type="text" value={inputVlaue} placeholder="Type something.."></input>
        </div>
    );
};

export default React