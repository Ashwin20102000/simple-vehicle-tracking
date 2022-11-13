import { Button } from 'react-bootstrap';
import { userIntialData } from '../utils/constants';
import { keys } from '../utils/keys';

const Header = ({userData,setUserData}) => {
  const [firstName] = userData?.user?.name?.split(" ");
  return (
  <div className="w-100 h-10 p-4 bg-primary text-light d-flex justify-content-around">
    <h4>
      Hi {firstName} 👋, Welcome Back !
    </h4>
    <Button onClick={() =>{
       setUserData(userIntialData)
       localStorage.removeItem(keys.tokenKey)
       }} className='text-light border-light' variant='outline-danger'>🚪Logout</Button>
  </div>
  );
}
  
export default Header;