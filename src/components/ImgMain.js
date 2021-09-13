import React from 'react';
import './components.module.css'

const MainBackground = {
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(frontMain.jpg)',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: '#F2EDF3',
    width: '100%',
    height: '93%',
    position: 'absolute',
    }

const ImgMain = () => {
    return (
        <div style={MainBackground}>

        </div>
    );
};

export default ImgMain;