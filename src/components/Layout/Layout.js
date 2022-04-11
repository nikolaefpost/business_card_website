import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='bg-dark text-light'>
            {children}
        </div>
    );
};

export default Layout;