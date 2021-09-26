import { Fragment } from 'react';

import Hero from '../components/Hero';
import HomeContent from '../components/HomeContent';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <hr />
      <HomeContent />
    </Fragment>
  );
};

export default Home;
