import React, { useState, useEffect } from 'react';
import eventsMock from '../lib/mock/events';
import { LoremIpsum } from 'react-lorem-ipsum';

//Components
import Section from '../components/Section/Section';
import Hero from '../components/Hero/Hero';
import EventInfo from '../components/EventInfo/EventInfo';

//Images
import ImageDesign from '../assets/images/design.jpg';

function Event(props) {
  const routeEventId = parseInt(props.match.params.id);
  const [events, setEvents] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    setEvents(eventsMock);
  }, []);

  useEffect(() => {
    events && setEvent(...events.filter(event => event.id === routeEventId));
  }, [events, routeEventId]);

  return (
    <>
        {event && 
          <Section title={event.title} withoutTopPadding={true}>
            <EventInfo
            description={event.description}
            image={event.imageUrl}
            location={event.location}
            date={event.dateTime}
            seats={event.availability}
            firm={event.company}
            />
          </Section>
        }
    </>
  );
}

export default Event;