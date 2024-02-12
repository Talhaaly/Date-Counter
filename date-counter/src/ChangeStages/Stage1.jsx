import React from 'react'


function Stage1({count, setCount}){
    function decreament(){
        setCount(count-1)
    }
        function increament(){
            setCount(count+ 1)
        }
        return(
            <div className="flex mt-5">
            <button className=' bg-black text-white' onClick={decreament} style={{width:"30px", height:"30px", borderRadius: "50%"}}><b>-</b></button>
            <p style={{fontWeight:"500", fontSize:"23px", marginBottom:"0"}}>Step: {count}</p>
            <button onClick={increament} style={{width:"40px", height:"40px"}}><b>+</b></button>
            </div>
        )
    }



export default Stage1