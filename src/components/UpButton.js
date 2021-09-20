import React from 'react';

const upStyle = {
    position: 'fixed',
    bottom :'30px',
    left: '75%',
    zIndex: '1',
}

const arrowStyle = {
    fontSize: '3.5rem',
    color: '#FFFBFB',
    backgroundColor: '#CD1BEA',
    borderRadius: "100%",
    padding: '0 0.5rem',
    opacity: '0.5',
}

const UpButton = () => {
    return (
        <>
                <a style={upStyle} href="#top">
                    <i style={arrowStyle} className="bi bi-arrow-up-short"></i>
                </a>
        </>
    );
};

export default UpButton;