import {
  Link,
} from 'react-router-dom';

import './styles.css';

// == Composant
const DestinationSection = ({
  image,
  destination,
  text,
  distance,
  time,
}) => (
  <>

    <h2>{destination}</h2>
    <p>{text}</p>
    <section>
      <div>
        <p>AVG. DISTANCE</p>
        <p>{distance} KM</p>
      </div>
    </section>
    <section>
      <div>
        <p>EST. TRAVEL TIME</p>
        <p>{time}</p>
      </div>
    </section>

  </>
);

// == Export
export default DestinationSection;
