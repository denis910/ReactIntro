import React from 'react';
import { Button } from '../../lib/style/generalStyle';

import{
    Event as EventWrapper,
    Figure,
    Image,
    Title,
    Description
} from './EventStyle';

const Event = ({
    image,
    title,
    description,
    buttonText,
    imageAlt,
    route
}) => {
    return (
        <EventWrapper>
            <Figure>
                <Image src={image} alt={imageAlt}/>
            </Figure>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button to={route} >{buttonText}</Button>
        </EventWrapper>
    );
}
export default Event;