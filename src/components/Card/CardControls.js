import { React, useState } from 'react';

import { faHeart, faShareNodes, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import colors from '../../colors';
import CardButton from './CardButton';

function CardControls({ content }) {
    const styles = {
        main: {
            display: 'flex',
            paddingTop: 20,
            paddingRight: 15,
            paddingLeft: 15,
            justifyContent: 'space-between',
        },
        container: {
            display: 'flex',
            gap: 5
        },
        text: {
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 15,
            color: colors['silver'],
            fontSize: 16,
            lineHeight: 1.5,
        }
    };

    const [showMore, setShowMore] = useState(false);
    const toggleExpand = () => {
        setShowMore((e) => !e);
    };

    return(
        <>
            <div style={styles.main}>
                <div style={styles.container}>
                    <CardButton icon={faHeart}/>
                    <CardButton icon={faShareNodes}/>
                </div>
                { showMore ? (
                <CardButton icon={faChevronUp} onClick={toggleExpand}/>
                ) : (
                <CardButton icon={faChevronDown} onClick={toggleExpand}/>
                )}
            </div>
            <p style={styles.text}>{showMore && content}</p>
        </>
    );
}

export default CardControls;