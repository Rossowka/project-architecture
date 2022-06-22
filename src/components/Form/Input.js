import React from 'react';

import colors from '../../colors';

function Input({ bgColor, color, borderSize, borderRadius, borderColor }) {
    const styles = {
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      paddingLeft: '2rem',
      paddingRight: '2rem',
      backgroundColor: colors[bgColor] || colors.white,
      color: colors[color] || colors.silver,
      borderWidth: borderSize || 2,
      borderRadius: borderRadius || 10,
      borderColor: borderColor || colors['dark-grey'],
      width: 200,
    }

    return <input style={styles} type='text' placeholder='Write something here!'/>;
}

export default Input;