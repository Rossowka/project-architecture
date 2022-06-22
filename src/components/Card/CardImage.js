import React from 'react';

function CardImage({ title, src }) {
    const styles = {
        height: 200,
        width: '100%',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div style={styles} title={title}></div>
    );
}

export default CardImage;

