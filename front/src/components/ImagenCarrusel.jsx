import React from 'react';

const ImagenCarrusel = ({ imageUrl, text }) => {
    return (
        <div>
            <img src={imageUrl} alt={text} style={{ width: '500px', height: '100%' }} />
        </div>
    );
};


export default ImagenCarrusel;