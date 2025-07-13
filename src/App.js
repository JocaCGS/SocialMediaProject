import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <h1>Paginas Criadas: </h1>
      <Link to="/feed">Ir para Feed</Link>
      <br/>
      <br/>
      <Link to="/trending">Ir para Trending</Link>
      <br/>
      <br/>
      <Link to="/notifications">Ir para Notifications</Link>
      <br/>
      <br/>
      <Link to="/chat">Ir para Chat</Link>
    </div>
  );
}

export default App;
