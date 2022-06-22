import React from 'react';

import colors from '../../colors';
import { EmployeeData } from '../Employees';

function Employees() {
    const styles = {
        container: {
            backgroundColor: 'white',
            boxShadow: `-1px 1px 5px`,
            color: colors['silver'],
            maxWidth: 400,
            marginRight: 'auto',
            marginLeft: 'auto',
            marginBottom: 20
        },
        wrapper: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderBottom: `solid 1px ${colors.silver}`,
        },
        employee: {
            color: colors['dark-grey'],
            textAlign: 'center',
            width: 200
        },
        additional: {
            textAlign: 'center',
            width: 200
        }
    };

    return (
        <div style={styles.container}>
            {EmployeeData.map(elem => {
                return (
                    <div key={`employee-${elem.id}`} style={styles.wrapper}>
                        <div style={styles.employee}>
                            <p>{elem.name} {elem.surname}</p>
                        </div>
                        <div style={styles.additional}>
                            <p>{elem.position}</p>
                            <p>Since: {elem.since}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Employees;