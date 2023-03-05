import './Notification.css'

function Notification({ message }) { 
  return (
    <h3 className="Notification-title">{message }</h3>
  )
}

export default Notification;