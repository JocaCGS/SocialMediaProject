import { useNavigate } from 'react-router-dom';
import './style.css';

export default function ButtonTrending() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/trending');
    };
    return(
        <div>
            <button className="buttonmore" onClick={handleClick}>
                <i className="bi bi-graph-up"></i> Trending
            </button>
        </div>
    )
}