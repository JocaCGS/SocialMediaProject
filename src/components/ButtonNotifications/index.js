import { useNavigate } from 'react-router-dom';
import './style.css';

export default function ButtonNotifications() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/notifications');
    };
    return(
        <div>
            <button className="buttonnotifications" onClick={handleClick}>
                <i className="bi bi-bell"></i> Notifications
            </button>
        </div>
    )
}