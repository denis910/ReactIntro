import React from 'react';

import EventCard from '../EventCard/EventCard';
import {
    EventInfo as EventInfoWrapper,
    Figure,
    Content,
    Image,
    Description,
} from './EventInfoStyle'

const EventInfo = ({
    image,
    description,
    title,
    location,
    date,
    seats,
    firm
}) => {
    return (
        <EventInfoWrapper>
            <Content>
                <Figure>
                    <Image src={image} alt="UX/UI design workshop" />
                </Figure>
                <EventCard 
                    title={title}
                    location={location}
                    date={date}
                    seats={seats}
                    firm={firm}
                    radius="false"
                    buttonText="Prijavi se"
                />
            </Content>
            <Description>
                {description}
            </Description>
        </EventInfoWrapper>
    );
}
export default EventInfo;