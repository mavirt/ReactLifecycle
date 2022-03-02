import React from "react";

function BlockChange(){
    let list =[
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        }
    ];


    //set states
    const[block, setBlock] = React.useState([1]);
    const[increment, setIncrement] = React.useState(1);
    const[back, setBack] = React.useState("blue");
    const[reset, setReset] = React.useState(false);

    let stylingBlock={
        backgroundColor: back,
        borderColor: "white",
        borderWidth:"2px",
        borderStyle: "solid",
        height: "50px",
        width: "50px",
        marginTop: "10px"
    }

    React.useEffect(()=>{
        if(setBlock){
            setBack("blue")
        }else{
            setBack("red")
        }

    }, [setBlock])

    //create new block when incremented
    const addBlock = () => {
        stylingBlock.push({
            id: 4,
        });
        setBlock(list);
        setReset(!reset);
    }



    return(
        <div>
            <button onClick ={()=>setIncrement(increment+1)}>Increase by 1 : {increment}</button>
            <button onClick ={()=>setReset(true)}>Click to Reset</button>
            <div style={stylingBlock}/>
        </div>
    )


}
export default BlockChange;