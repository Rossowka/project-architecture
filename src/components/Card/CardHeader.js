import React from 'react';

import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import { Avatar, Entry, CardButton } from '../Card'


function CardHeader({ title }) {
    const styles = {
        header: {
            display: 'flex',
            height: 100,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        container : {
            display: 'flex',
            alignItems: 'center'
        },
        button: {
            marginTop: -15,
            marginRight: 15
        }
    }

    return (
        <div style={styles.header}>
            <div style={styles.container}>
                <Avatar bgColor='red' label='R'/>
                <Entry title={title} date='2016, 09, 14'/>
            </div>
            <div style={styles.button}>
                <CardButton icon={faEllipsisVertical}/>
            </div>
         </div>
    );
}

export default CardHeader;