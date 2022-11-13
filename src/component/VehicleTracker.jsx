import React from 'react'
import NoRecordsFound from './NoRecordsFound';
import Search from './Search'
import VehicleDisplayPage from './VehicleDisplayPage'

const VehicleTracker = ({vehicleGroup,setVehicleGroup}) => {
  const [search,setSearch] = React.useState('');
  const filterVechicles = vehicleGroup?.map(vehicles=>vehicles?.vehicles?.flat());
  const [vehicles,setVechicles] = React.useState(filterVechicles?.flat());
  const filterVechicleSearch = () => {
    if(search===""){
      setVechicles(filterVechicles?.flat());
    }
    setVechicles(filterVechicles?.flat());
    setVechicles(prev=>([...prev?.filter(regNo=>regNo.registrationNumber.toLowerCase().includes(search.toLowerCase()))]));
  }
  return (
    <div className='m-3'>
      <Search search={search} filterVechicleSearch={filterVechicleSearch} setSearch={setSearch} />
      {
        vehicles?.length>0 ? <VehicleDisplayPage vehicles={vehicles} />:<NoRecordsFound />
      }
    </div>
  )
}

export default VehicleTracker