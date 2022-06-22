import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import colors from '../../colors';

function CardButton({ icon, onClick }) {
    const styles = {
        color: colors['silver'],
        backgroundColor: colors['white'],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: 'none',
        fontSize: 18
    }

    return(
        <button style={styles} onClick={onClick}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default CardButton;