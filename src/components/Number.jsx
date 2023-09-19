import React from 'react'



function Number({numb}) {
 
const subtract = (e) => {
  e.preventDefualt()
}

  return (
    <div>
      <h2>Your number is :</h2>
      <h2 onChange={subtract}>{numb}</h2>
    </div>
  )
}

Number.defaultProps = {
  numb: 10,
}




export default Number