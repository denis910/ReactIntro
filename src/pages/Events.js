import React, { Component } from 'react';

//Components
import EventCard from '../components/EventCard/EventCard';
import Grid from '../components/Grid/Grid';
import Section from '../components/Section/Section';
import Event from '../components/Event/Event';
import Hero from '../components/Hero/Hero';

function Events() {
  return (
    <>
        <Section title="Events" withoutTopPadding={true}>
            <Grid columns="4">
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
                <EventCard 
                title="UX/UI design workshop"
                location="Hodnik FOI-ja"
                date="14.10.(9:00-16:00h)"
                seats="15/60"
                firm="Speck"
                withRadius={true}
                />
            </Grid>
        </Section>
    </>
  );
}

export default Events;