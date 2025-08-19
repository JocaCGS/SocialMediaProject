import React, { Profiler } from 'react';
import './style.css'; // importando o CSS local da página (opcional)
import FormPost from  '../../components/FormPost'
import ButtonHome from  '../../components/ButtonHome'
import ButtonNotifications from  '../../components/ButtonNotifications'
import ButtonMessages from  '../../components/ButtonMessages'
import ButtonProfile from  '../../components/ButtonProfile'
import ButtonMore from  '../../components/ButtonMore'
import SearchBar from  '../../components/SearchBar'
import ButtonTrending from  '../../components/ButtonTrending'
import ButtonSearch from  '../../components/ButtonSearch'
import ButtonNewPost from  '../../components/ButtonNewPost'
import { Link } from 'react-router-dom';
  


function Feed() {
  return (
      <div className="wholepage">
        <div className='chatnav-div'>
          <div className='chatnav-content'>
            <h3>S.M. Project</h3>
            <div className='chatnav-content'>
              <h3>Messages</h3>
              <SearchBar/>
              <span><span className='nofriendstext'>Huh. There's nothing here... Try</span><Link to="/feed"> finding </Link>  <span className='nofriendstext'> someone to chat with!</span>  </span>
            </div>
          </div>
        </div>
        <div className='chat-div'>
          <div className='chat-content1'>
            <div className="chat-header">
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

const hardcodedprofile = {
  firstName: "Walter",
  lastName: "White",
  age: 52,
  id: 1
}

export default Feed;
