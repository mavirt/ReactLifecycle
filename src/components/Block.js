import React from "react";
function Block(props){

    let blockStyle ={
        backgroundColor: props.baColor,
        borderColor: "white",
        height: "50px",
        width: "50px",
        borderWidth: "2px",
        borderStyle:"solid"
    }

    return(
        <div style = {blockStyle}> </div>
    )

}


export default Block;