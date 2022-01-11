import React from 'react';

import {
  Container, H1, Ps, Button, Text,
} from '../assets/styles/IntroText';

const Home = () => (
  <Container>
    <H1>
      The Perfect way to master Mathematics
      {' '}
      <br />
      {' '}
      is
      to practice Mathematics
    </H1>
    <Text>
      <Ps>
        Start learning mathematics with our free tool. We provide you with a
        free calculator and quote.
      </Ps>
    </Text>
    <Button to="/calculator">Get Started</Button>
  </Container>
);

export default Home;
