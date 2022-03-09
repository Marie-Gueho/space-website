// == Import
import './styles.css';
import Navbar from '../Navbar';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
    <section className="app-main">
      <header className="app-header">
        <h1 className="app-title">So, you want to travel to
          <span className="app-title-span">Space</span>
        </h1>
        <p className="app-content">Let’s face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we’ll give you a truly out of this world experience!
        </p>
      </header>
      <button className="app-button" type="button">Explore</button>
    </section>
  </div>
);

// == Export
export default App;
