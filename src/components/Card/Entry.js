import React from 'react';

import colors from '../../colors';

function Entry({ title, date }) {
    const styles = {
        title: {
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            color: colors['dark-grey'],
        },
        date: {
            marginTop: '0.5rem',
            marginBottom: '0.5rem',
            color: colors['silver'],
        }
    }

    let datePosted;
    date ? datePosted = new Date(date) :  datePosted = new Date();
    let formatter = new Intl.DateTimeFormat('en-us', { month: 'long' });
    let [month, day, year] = [formatter.format(datePosted), datePosted.getDate(), datePosted.getFullYear()];

    return (
        <div>
            <p style={styles.title}>{title}</p>
            <p style={styles.date}>{month} {day}, {year}</p>
        </div>
    );
}

export default Entry;