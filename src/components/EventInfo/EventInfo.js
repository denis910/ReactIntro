import React from 'react';
import './EventInfo.scss';

import EventCard from '../EventCard/EventCard';
import Grid from '../Grid/Grid';

const EventInfo = ({
    image,
    description
}) => {
    return (
        <div className="EventInfo">
            <div className="EventInfo-Content">
                <figure className="EventInfo-Figure">
                    <img src={image} alt="UX/UI design workshop" className="EventInfo-FigureImage"/>
                </figure>
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                />
            </div>
            <p className="EventInfo-Description">
            {description}
            </p>
        </div>
    );
}
export default EventInfo;