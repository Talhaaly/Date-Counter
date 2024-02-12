import React from 'react'


function Stage3({count2}){
  const date = new Date()
  const check = date.setDate(9 + count2)
  const convertTostring = date.toDateString()
  console.log(date);
  console.log(convertTostring);
  return(
     <p style={{fontSize:"22px", fontWeight:"500"}}>{count2 === 0 ?`Today is `+ convertTostring: `${count2} days from Today is `+ convertTostring } </p>
  )
}
export default Stage3