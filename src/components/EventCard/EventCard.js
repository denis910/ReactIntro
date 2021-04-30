import React from 'react';
//import './EventCard.scss';
import { Button } from '../../lib/style/generalStyle';
import {
    EventCard as EventCardWrapper,
    Title,
    Content,
    ContentRow,
    Item,
    ItemTitle,
    ItemValue
} from './EventCardStyle'

const EventCard = ({
    title,
    location,
    date,
    seats,
    firm,
    radius,
    link,
    buttonText
}) => {
    return (
        <EventCardWrapper radius={radius}>
            <Title radius={radius}>{title}</Title>
            <Content radius={radius}>
                <ContentRow>
                    <Item>
                        <ItemTitle>Lokacija</ItemTitle>
                        <ItemValue>{location}</ItemValue>
                    </Item>
                    <Item>
                        <ItemTitle>Datum i vrijeme</ItemTitle>
                        <ItemValue>{date}</ItemValue>
                    </Item>
                </ContentRow>
                <ContentRow>
                    <Item>
                        <ItemTitle>Slobodna mjesta</ItemTitle>
                        <ItemValue>{seats}</ItemValue>
                    </Item>
                    <Item>
                        <ItemTitle>Firma</ItemTitle>
                        <ItemValue>{firm}</ItemValue>
                    </Item>
                </ContentRow>
            </Content>
            <Button to={link}>{buttonText}</Button>
        </EventCardWrapper>
    );
}
export default EventCard;