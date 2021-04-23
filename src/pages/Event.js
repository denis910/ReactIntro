import React, { Component } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

//Components
import Grid from '../components/Grid/Grid';
import Section from '../components/Section/Section';
import Hero from '../components/Hero/Hero';
import EventInfo from '../components/EventInfo/EventInfo';

//Images
import ImageDesign from '../assets/images/design.jpg';

function Event() {
  return (
    <>
        <Section title="UX/UI design workshop" withoutTopPadding={true}>
            <EventInfo
            description={<LoremIpsum p={2} />}
            image={ImageDesign}
            />
        </Section>
    </>
  );
}

export default Event;