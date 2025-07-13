import { useNavigate } from 'react-router-dom'; // ✅ Importa o hook
import './style.css';

export default function ButtonHome() {
    const navigate = useNavigate(); // ✅ Instancia o hook

    const handleClick = () => {
        navigate('/feed'); // ✅ Redireciona para /feed
    };

    return (
        <div>
            <button className="buttonhome" onClick={handleClick}>
                <i className="bi bi-house"></i> Home
            </button>
        </div>
    );
}
