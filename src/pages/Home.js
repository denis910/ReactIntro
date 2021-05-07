import React, { useState, useEffect } from 'react';
import eventsMock from '../lib/mock/events';

//Components
import Section from '../components/Section/Section';
import { Grid, LoaderWrapper } from '../lib/style/generalStyle';
import Event from '../components/Event/Event';
import Hero from '../components/Hero/Hero';
import { colors } from '../lib/style/theme';

function Home() {

  const [events, setEvents] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setEvents(eventsMock);
    }, 1000);
  }, [events]);
  

  return (
    <>
      <Hero/>
      <Section title="Featured events">
        {!events &&
          <LoaderWrapper
            type="TailSpin"
            color={colors.yellow}
            height={100}
            width={100}
          />
        }
        {events &&
          <Grid columns={3}>
            {events.map(event => event.isFeatured &&
              <Event 
                key={event.id}
                image={event.imageUrl}
                imageAlt={event.imageAlt}
                title={event.title}
                description={event.description}
                buttonText="Find out more"
                route={`/Event/${event.id}`}
              />)
            }
          </Grid>
        }
      </Section>
    </>
  );
}

export default Home;
