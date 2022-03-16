/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import './styles.css';

import {
  NavLink,
} from 'react-router-dom';
import moon from '../../assets/destination/image-moon.png';
import mars from '../../assets/destination/image-mars.png';
import europa from '../../assets/destination/image-europa.png';
import titan from '../../assets/destination/image-titan.png';

import destinations from './datas.json';

// == Composant
const Destination = () => {
  const [activeSection, setActiveSection] = useState('moon');
  const currentSection = destinations.find((e) => e.destination === activeSection);

  const getActiveClassname = ({ isActive }) => (isActive ? 'destination-nav-link destination-nav-link--active' : 'destination-nav-link');

  return (
    <main className="destination-container">

      <section className="destination-section">
        <h1 className="destination-title"><span>01</span>PICK YOUR DESTINATION</h1>
        <section className="destination-content">
          <article>
            <img
              src={currentSection.destination === 'moon'
                ? moon
                : currentSection.destination === 'mars'
                  ? mars
                  : currentSection.destination === 'europa'
                    ? europa
                    : currentSection.destination === 'titan'
                      ? titan : null}
              alt={activeSection}
            />
          </article>
          <article className="destination-right">
            <ul className="destination-nav">
              <NavLink className={getActiveClassname} to="moon" onClick={() => setActiveSection('moon')}>MOON</NavLink>
              <NavLink className={getActiveClassname} to="mars" onClick={() => setActiveSection('mars')}>MARS</NavLink>
              <NavLink className={getActiveClassname} to="europa" onClick={() => setActiveSection('europa')}>EUROPA</NavLink>
              <NavLink className={getActiveClassname} to="titan" onClick={() => setActiveSection('titan')}>TITAN</NavLink>
            </ul>
            <h2>{currentSection.destination.toUpperCase()}</h2>
            <p>{currentSection.text}</p>
            <section>
              <div>
                <p>AVG. DISTANCE</p>
                <p>{currentSection.distance} KM</p>
              </div>
            </section>
            <section>
              <div>
                <p>EST. TRAVEL TIME</p>
                <p>{currentSection.time}</p>
              </div>
            </section>

          </article>
        </section>
      </section>

      {/*
    <Routes>
      {destinations.map((e) => (
        <Route
          key={e.destination}
          path={e.destination === 'moon' ? '/' : e.destination}
          element={(
            <DestinationSection
              image={e.destination === 'moon' ? moon : e.destination === 'mars' ? mars : e.destination === 'europa' ? europa : e.destination === 'titan' ? titan : null}
              destination={e.destination.toUpperCase()}
              text={e.text}
              distance={e.distance}
              time={e['travel-time']}
            />
        )}
        />
      ))}
       <Route
        path="/"
        element={(
          <DestinationSection
            image={moon}
            destination="MOON"
            text="See our planet as you’ve never seen it before. A perfect relaxing trip away to
            help
  regain perspective and come back refreshed. While you’re there, take in some history
  by visiting the Luna 2 and Apollo 11 landing sites."
            distance="384,400"
            time="3 days"
          />
        )}
      />
      <Route
        path="mars"
        element={(
          <DestinationSection
            image={mars}
            destination="MARS"
            text="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,
              the tallest planetary mountain in our solar system. It’s two and a half times
              the size of Everest!"
            distance="225 mil."
            time="9 months"
          />
        )}
      />
      <Route
        path="europa"
        element={(
          <DestinationSection
            image={europa}
            destination="EUROPA"
            text="The smallest of the four Galilean moons orbiting Jupiter, Europa is a
            winter lover’s dream. With an icy surface, it’s perfect for a bit of
            ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin."
            distance="628 mil.."
            time="3 years"
          />
        )}
      />
      <Route
        path="titan"
        element={(
          <DestinationSection
            image={titan}
            destination="TITAN"
            text="The only moon known to have a dense atmosphere other than Earth, Titan
            is a home away from home (just a few hundred degrees colder!). As a
            bonus, you get striking views of the Rings of Saturn."
            distance="1.6 bil."
            time="7 years"
          />
        )}
      />
    </Routes> */}
      {/* <Outlet /> */}
    </main>
  );
};

// == Export
export default Destination;
