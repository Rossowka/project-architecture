import React from 'react';

import colors from '../../colors';

function Avatar({ bgColor, color, label }) {
    const styles = {
        color: colors[color] || colors['white'],
        backgroundColor: colors[bgColor] || colors['dark-grey'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginRight: 25,
        marginLeft: 25
    }

    return (
        <div style={styles}>{label}</div>
    );
}

export default Avatar;