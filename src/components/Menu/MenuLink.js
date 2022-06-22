import React from 'react';

import colors from '../../colors';

function MenuLink({ to, children, isActive }) {
    const styles= {
        textDecoration: 'none',
        display: 'flex',
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 10,
        paddingLeft: 10,
        color: colors['dark-grey'],
        backgroundColor: isActive ? colors.red : 'none',
        width: '100%'
    }

    return <a href={to} style={styles}>{children}</a>;
};

export default MenuLink;