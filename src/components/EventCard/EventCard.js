import React from 'react';
import Button from '../Button/Button';
import './EventCard.scss';

const EventCard = ({
    title,
    location,
    date,
    seats,
    firm,
    withRadius
}) => {
    const EventCardClassName = withRadius ? 'EventCard EventCard_Radius' : 'EventCard EventCard_Radius_None';
    return (
        <div className={EventCardClassName}>
            <h2 className={EventCardClassName + "-Title"}>{title}</h2>
            <div className={EventCardClassName + "-Content"}>
                <div className="EventCard-ContentRow">
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Lokacija</h3>
                        <p className="EventCard-ItemValue">{location}</p>
                    </div>
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Datum i vrijeme</h3>
                        <p className="EventCard-ItemValue">{date}</p>
                    </div>
                </div>
                <div className="EventCard-ContentRow">
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Slobodna mjesta</h3>
                        <p className="EventCard-ItemValue">{seats}</p>
                    </div>
                    <div className="EventCard-Item">
                        <h3 className="EventCard-ItemTitle">Firma</h3>
                        <p className="EventCard-ItemValue">{firm}</p>
                    </div>
                </div>
            </div>
            <Button link="/Event" text="Find Out More"/>
        </div>
    );
}
export default EventCard;