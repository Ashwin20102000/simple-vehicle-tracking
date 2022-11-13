import React from 'react'

const Info = ({left,right,isSmall}) => {
  const info = isSmall 
  ? <><small>{left}</small><small>{right}</small></>
  : <><span>{left}</span><span>{right}</span></>
  return (
    <div className="d-flex justify-content-between">
      {info}
    </div>
  )
}

export default Info