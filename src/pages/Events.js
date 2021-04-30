import React, { useState, useEffect } from 'react';
import eventsMock from '../lib/mock/events';

//Components
import EventCard from '../components/EventCard/EventCard';
import { Grid, LoaderWrapper, SearchBar } from '../lib/style/generalStyle';
import Section from '../components/Section/Section';
import { colors } from '../lib/style/theme';

function Events() {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      search === '' && setEvents(eventsMock);
    }, 1000);
  }, [events]);

  const [search, setSearch] = useState('');

  const handleSearch = (changedEvent) => {
    setSearch(changedEvent.target.value.toString().toLowerCase());
    events && setEvents(eventsMock.filter(event => event.title.toString().toLowerCase().includes(changedEvent.target.value.toString().toLowerCase())));
  }

  return (
    <>
        <Section title="Events" withoutTopPadding={true}>
          <SearchBar type="search" placeholder="Search event by title" disabled={!events} onChange={handleSearch}/>
          {!events &&
            <LoaderWrapper
              type="TailSpin"
              color={colors.yellow}
              height={100}
              width={100}
            />
          }
          {events &&
            <Grid columns={4}>
              {events.map(event => event &&
                <EventCard
                  key={event.id} 
                  title={event.title}
                  location={event.location}
                  date={event.dateTime}
                  seats={event.availability}
                  firm={event.company}
                  radius="true"
                  link={`/Event/${event.id}`}
                  buttonText="Find out more"
                />
              )}
            </Grid>
          }
        </Section>
    </>
  );
}

export default Events;