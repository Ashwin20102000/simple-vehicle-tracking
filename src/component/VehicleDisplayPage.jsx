import React from 'react'
import Vehicle from './Vehicle';

const VehicleDisplayPage = ({vehicles}) => {
  return (
    <div className='d-flex m-2 flex-wrap'> 
      {vehicles?.map((vehicle,idx)=><Vehicle key={idx} vehicle={vehicle} />)}
    </div>
  )
}

export default VehicleDisplayPage