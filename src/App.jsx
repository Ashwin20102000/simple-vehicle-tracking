import React from 'react'
import LandingPage from './component/LandingPage';
import Login from './component/Login'
import { userIntialData } from './utils/constants';

function App() {
  const [userData,setUserData] = React.useState(userIntialData); 
  return (
    <div className="App">
     {userData.isLoggedIn ? <LandingPage userData={userData} setUserData={setUserData} /> : <Login setUserData={setUserData} />}
    </div>
  )
}

export default App
