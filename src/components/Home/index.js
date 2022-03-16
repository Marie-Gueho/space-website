import './styles.css';

// == Composant
const Home = () => (
  <main className="app-main">
    <section className="app-header">
      <h1 className="app-title">So, you want to travel to
        <span className="app-title-span">Space</span>
      </h1>
      <p className="app-content">Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!
      </p>
    </section>
    <button className="app-button" type="button">Explore</button>
  </main>
);

// == Export
export default Home;
