import Toast from 'react-bootstrap/Toast';

function Notification({notification,setNotification}) {
  return (
    <div className='w-100 d-flex position-absolute justify-content-end p-3'>
      <Toast show={notification.show} onClose={()=>setNotification({show:false})} bg={notification.variant}>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{notification.title}</strong>
        </Toast.Header>
        <Toast.Body className='text-light'>{notification.message}</Toast.Body>
      </Toast>
    </div>
  );
}

export default Notification;