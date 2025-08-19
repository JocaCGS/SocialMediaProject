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


function Feed() {
  return (
      <div className="wholepage">
        <div className='nav-div'>
          <div className='nav-content'>
            <h3>S.M. Project</h3>
            <div className='nav-content'>
              <h4>Navigate</h4>
              <div>
                <ButtonHome/>
              </div>
              <div>
                <ButtonMessages/> 
              </div>
              <div>
                <ButtonNotifications/> 
              </div>
              <div>
                <ButtonProfile/> 
              </div>
              <div>
                <ButtonMore/> 
              </div>
            </div>
            <div className='nav-content2'>
              <h4>Discover</h4>
              <div>
                <ButtonTrending/>
              </div>
              <div>
                <ButtonSearch/>
              </div>
                
            </div>
          </div>
        </div>
        <div className='notif-div'>
          <div className='notif-content1'>
            <div className="notif-header">
              <div>
                <span className='titlenotif'>Notifications</span><br />
                <span className='subtitlenotif'>It's for you.</span>
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
