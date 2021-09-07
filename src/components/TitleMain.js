import React from 'react';
import NavBar from "./NavBar";

const TitleMain = () => {
    return (<>
            <NavBar/>
        <div style={{ width: '100%', height: '66vh', marginLeft: '7%', marginTop: '25vh'}} className='mb-lg-2'>
            <img src='mainTitleImg.png'/>
        </div>
        </>
    );
};

export default TitleMain;