import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserAstronaut, faUserNinja } from '@fortawesome/free-solid-svg-icons';

import colors from '../../colors';

function Button({ children, bgColor, color, icon='astronaut' }) {
    const styles = {
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        borderRadius: 10,
        textTransform: 'capitalize',
        backgroundColor: colors[bgColor] || colors.blue,
        color: colors[color] || colors.white,
    }

    const users = {
        ninja: faUserNinja,
        astronaut: faUserAstronaut,
        user: faUser,
    }

    return (
        <button style={styles}>
        <FontAwesomeIcon icon={users[icon]}/>
        {children}
        </button>
    );
}

export default Button;