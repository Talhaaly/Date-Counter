import React from 'react'


function Stage2({count,count2, setCount2}){
  function decrease(){
      setCount2(count2 - count)
  }
      function increase(){
          setCount2(count2 + count)
      }
     return(
      <div className="flex mt-3">
          <button className='text-white rounded-3xl mx-5' onClick={decrease} style={{width:"30px", height:"30px", backgroundColor: "black"}}><b>-</b></button>
          <p style={{fontWeight:"500", fontSize:"23px"}}>Count: {count2}</p>
          <button className='text-white rounded-3xl mx-5' onClick={increase} style={{width:"30px", height:"30px", backgroundColor: "black"}}><b>+</b></button>
          </div>
     )
  }

  export default Stage2