import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Feed from '../pages/Feed';
import Trending from '../pages/Trending';
import Notifications from '../pages/Notifications';
import Chat from '../pages/Chat';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />          {/* Página inicial */}
        <Route path="/feed" element={<Feed />} />    {/* Página Feed */}
        <Route path="/trending" element={<Trending />} />    {/* Página Feed */}
        <Route path="/notifications" element={<Notifications />} />    {/* Página Feed */}
        <Route path="/chat" element={<Chat />} />    {/* Página Feed */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
