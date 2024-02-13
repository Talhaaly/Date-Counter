import React from 'react'

 function Stageone({count, setCount}){
    function decreament(){
        setCount(count-1)
    }
        function increament(){
            setCount(count+ 1)
        }
        return(
            <div className="flex mt-2">
            <button className='text-white rounded-3xl mx-6' onClick={decreament} style={{width:"30px", height:"30px" , backgroundColor: "black"}}><b>-</b></button>
            <p style={{fontWeight:"500", fontSize:"23px", marginBottom:"0"}}>Step: {count}</p>
            <button className='text-white rounded-3xl mx-6' onClick={increament} style={{width:"30px", height:"30px",backgroundColor: "black" }}><b>+</b></button>
            </div>
        )
    }

    export default Stageone