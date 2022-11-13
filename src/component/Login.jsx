import React from 'react'
import { loginApi } from '../API/login';
import { loginStyles } from '../utils/styles'
import Notification from './common/Notification';
import Loader from './Loading/Loader';

const Login = (props) => {
  const [username,setUsername] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [pending,setPending] = React.useState(false);
  const [notification,setNotification] = React.useState({
    show:false,
  });
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      setPending(true);
      if(!username||!password){
        return;
      }
      const response = await loginApi.loginWithCredentials({username,password});
      if(response.token){
        setTimeout(()=>{
          setNotification({show:false})
          props.setUserData({...response,isLoggedIn:true});
        },1500)
        setNotification(prev=>({...prev,title:"Success !",message:'Logged in Successfully',variant:"success",show:true}))
      }
      if(response.statusCode===400){
        setTimeout(()=>setNotification({show:false}),1500)
        setNotification(prev=>({...prev,title:response.error,message:response.message+' of username and password',variant:"danger",show:true}))
      }
    } catch (error) {
      console.log('error', error)
    }
    finally{
      setPending(false);
    }
    
  }
  return (
    <div>
      {
        notification.show && <Notification notification={notification} setotification={setNotification}  />
      }
    <div style={loginStyles}>
      <div className='w-40 h-40 p-4 rounded border border-3 '>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className=' my-4 '>
          <input
          value={username}
          onChange={e=>setUsername(e?e.target.value:"")}
           placeholder='Username' className='form-control' type="text"  />
          <input 
          value={password}
          onChange={e=>setPassword(e?e.target.value:"")}
          placeholder='Password' className='form-control my-3' type='password' />
          <button type='submit' className='btn btn-primary'>Login</button>
        </form>
      </div>
      {pending && <Loader />}
    </div>
    </div>
  )
}

export default Login