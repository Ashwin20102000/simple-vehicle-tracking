import  Header  from './Header';
import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import { keys } from '../utils/keys';
import { vehicleService } from '../API/vechicleService';
import VehicleTracker from './VehicleTracker';
import Loader from './Loading/Loader';
// import { firebaseDb } from '../firebase/firebase';
// import { collection } from 'firebase/firestore/lite';

const LandingPage = ({userData,setUserData}) => {
  const [token] = useLocalStorage(keys.tokenKey,userData.token); 
  const [vehicleGroup,setVehicleGroup] = React.useState([]);
  const [loader,setLoader ] = React.useState(false);
  const getVehicleGroup = async()=> {
    try {
      setLoader(true);
      const response = await vehicleService.getVehicleGroups(token); 
      if(response?.count>0){
        setVehicleGroup(response?.data);
      }
    } catch (error) {
      console.log('error', error)
    }
    finally{
      setLoader(false);
    }
  } 

  const fetchLocation = (db) => {
    console.log('db', db)
    // const vehicleCol = collection(c)
  }
  React.useEffect(()=>{
    getVehicleGroup();
    // fetchLocation(firebaseDb)
  },[]);
  return (
    <div>
      <Header userData={userData}  setUserData={setUserData}  />
      {loader && <Loader />}
     {vehicleGroup.length>0 && <VehicleTracker vehicleGroup={vehicleGroup} setVehicleGroup={setVehicleGroup} />}
    </div>
  )
}

export default LandingPage;