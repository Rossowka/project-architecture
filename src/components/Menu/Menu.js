import React from 'react';

function Menu({ children }) {
    const styles = {
        width: 60,
        position: 'absolute',
    };

    return <ul style={styles}>{children}</ul>;
};

export default Menu;