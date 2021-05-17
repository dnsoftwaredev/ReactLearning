import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
    summer : {
        text: 'Let\'s hit the beach!',
        iconName: 'sun',
    },
    winter: {
        text: 'Burr it is cold',
        iconName: 'snowflake',
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    // season can return either 'summer' or 'winter' => pass to the line below
    // to select summer or winter
    const {text, iconName} = seasonConfig[season];
    // syntaxtic sugar => deconstructuring
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    );
};

export default SeasonDisplay;