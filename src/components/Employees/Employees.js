import { React, useState } from 'react';

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
            width: 200,
            height: 120
        }
    };

    const [showData, setShowData ] = useState(false);

    let handleClick = () => {
        setShowData(showData => !showData)
    }

    return (
        <div style={styles.container}>
            {EmployeeData.map(elem => {
                return (
                    <div key={`employee-${elem.id}`} style={styles.wrapper}>
                        <div style={styles.employee} onClick={handleClick}>
                            <p>{elem.name} {elem.surname}</p>
                        </div>
                        <div style={styles.additional}>
                            { showData &&
                            <>
                                <p>Age: {elem.age}</p>
                                <p>Position: {elem.position}</p>
                                <p>Salary: {elem.salary}</p>
                            </>
                            }
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Employees;