import React from 'react';

import colors from '../../colors';
import { CardHeader, CardImage, CardControls } from '../Card'

function Card({ title, intro, content }) {
    const styles = {
        container: {
            backgroundColor: 'white',
            boxShadow: `-1px 1px 5px`,
            color: colors['silver'],
            maxWidth: 400,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        text: {
            paddingLeft: 15,
            paddingRight: 15,
            color: colors['silver'],
            fontSize: 16,
            lineHeight: 1.5,
        }
    }

    return (
        <div style={styles.container}>
            <CardHeader title={title}/>
            <CardImage title={title} src='https://assets.bonappetit.com/photos/57acce0453e63daf11a4da2b/master/pass/PAELLA.jpg'/>
            <p style={styles.text}>{intro}</p>
            <CardControls content={content}/>
        </div>
    );
};

export default Card;