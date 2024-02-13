import React from 'react'


function Stage3({count2}){
  const date = new Date()
  const check = date.setDate(12 + count2)
  const convertTostring = date.toDateString()
  console.log(date);
  console.log(convertTostring);
  return(
     <p className='mb-2 mt-3' style={{fontSize:"22px", fontWeight:"500"}}>{count2 === 0 ?`Today is `+ convertTostring: `${count2} days from Today is `+ convertTostring } </p>
  )
}
export default Stage3