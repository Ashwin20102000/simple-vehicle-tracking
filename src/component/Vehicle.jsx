import React from 'react'
import { Card } from 'react-bootstrap'
import { dateFormatter } from '../utils/format'
import Info from './Info'

const Vehicle = ({vehicle}) => {
  return (
    <Card style={{width:"25rem"}} className='m-4'>
      <Card.Header>
        <Info left={`ID : ${vehicle?.id}`} right={vehicle?.registrationNumber} />
      </Card.Header>
      <Card.Body>
        <Info 
          left={`Type : ${vehicle?.type ?? 'Unknown'}`} 
          right={`Status : ${vehicle?.status==="Online"?"🟢":"🔴"}`}
        />
        <Info left={`Model : ${vehicle?.model ?? 'Unknown'}`}
          right={`Make:  ${vehicle?.make ?? 'Unknown'}`} 
        />
      </Card.Body>
      <Card.Footer>
        <Info 
          left = { `Installion on ${dateFormatter(vehicle?.installationDate)}`}
          right = {`Trial End ${vehicle?.trialEndDate?" on "+dateFormatter(vehicle?.trialEndDate) : 'Not Specified'}` }
          isSmall={true}
        />
      </Card.Footer>
    </Card>
  )
}

export default Vehicle