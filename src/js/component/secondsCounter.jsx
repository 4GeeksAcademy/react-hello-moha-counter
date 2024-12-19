import React, { useEffect, useState } from 'react';

function SecondsCounter(props) {
    const [seconds, setSeconds] = useState(props.seconds || 0);
    
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="counter">
            <i className="fas fa-clock"></i>
            <p>{seconds} seconds</p>
        </div>
    );
}

export default SecondsCounter;
