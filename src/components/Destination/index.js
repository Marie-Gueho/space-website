/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import './styles.css';

import {
  Link,
} from 'react-router-dom';

import destinations from './datas.json';

// == Composant
const Destination = () => {
  const [activeSection, setActiveSection] = useState('moon');
  const currentSection = destinations.find((e) => e.destination === activeSection);

  const activeClass = (arg) => (activeSection === arg ? 'destination-nav-link destination-nav-link--active' : 'destination-nav-link');

  return (
    <main className="destination-container">

      <section className="destination-section">
        <h1 className="destination-title"><span>01</span>PICK YOUR DESTINATION</h1>
        <section className="destination-content">
          <article>
            <img
              src={require(`../../assets/destination/image-${activeSection}.png`)}
              alt={activeSection}
            />
          </article>
          <article className="destination-right">
            <ul className="destination-nav">
              {destinations.map((e) => (
                <Link
                  className={activeClass(e.destination)}
                  to={e.destination}
                  onClick={() => setActiveSection(e.destination)}
                >
                  {e.destination.toUpperCase()}
                </Link>
              ))}
            </ul>
            <h2>{currentSection.destination.toUpperCase()}</h2>
            <p>{currentSection.text}</p>
            <div className="dest-separator" />
            <section className="dest-infos">
              <div className="dest-info">
                <p>AVG. DISTANCE</p>
                <p>{currentSection.distance.toUpperCase()} KM</p>
              </div>
              <div className="dest-info">
                <p>EST. TRAVEL TIME</p>
                <p>{currentSection.travelTime.toUpperCase()}</p>
              </div>
            </section>

          </article>
        </section>
      </section>
    </main>
  );
};

// == Export
export default Destination;
