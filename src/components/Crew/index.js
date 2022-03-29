/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import crew from './datas.json';

// == Composant
const Crew = () => {
  const [activeSection, setActiveSection] = useState('Douglas Hurley');
  const currentSection = crew.find((e) => e.name === activeSection);

  const activeClass = (arg) => (activeSection === arg
    ? 'crew-nav-link crew-nav-link--active'
    : 'crew-nav-link');

  return (
    <main className="crew-container">
      <section className="crew-section">
        <section className="crew-content">
          <div className="crew-left-part">
            <h1 className="crew-title">
              <span>01</span>MEET YOUR CREW
            </h1>
            <div className="crew-left">
              <article className="crew-infos">
                <h2>{currentSection.role.toUpperCase()}</h2>
                <h3>{currentSection.name.toUpperCase()}</h3>
                <p>{currentSection.text}</p>
              </article>
              <ul className="crew-nav">
                {crew.map((e) => (
                  <Link
                    onClick={() => setActiveSection(e.name)}
                    key={e.role}
                    to={e.role.toLocaleLowerCase().split(' ').join('-')}
                  >
                    <div className={activeClass(e.name)} />
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <article className="crew-right">
            <img
              src={require(`../../assets/crew/image-${activeSection
                .toLowerCase()
                .split(' ')
                .join('-')}.png`)}
              alt={activeSection}
            />
          </article>
        </section>
      </section>
    </main>
  );
};

// == Export
export default Crew;
