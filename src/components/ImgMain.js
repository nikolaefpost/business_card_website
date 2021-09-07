import React from 'react';
// import style from './components.module.css'

const Header = {
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(frontMain.jpg)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#F2EDF3',
    width: '100%',
    height: '103%',
    position: 'absolute',
    zIndex: -1
    }

const ImgMain = () => {
    console.log(Header)
    return (
        <div style={Header}>
               <p  >fotofoto</p>
        </div>
    );
};

export default ImgMain;