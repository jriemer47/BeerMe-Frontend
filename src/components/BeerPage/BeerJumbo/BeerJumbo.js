import React from 'react';

import { Header, Icon } from 'semantic-ui-react';

const BeerJumbo = props => {
  return (
    <div style={{ marginTop: '2em' }}>
      <Header as="h2" icon textAlign="center">
        <Icon name="beer" circular />
        <Header.Content>Let's Grab a Drink!</Header.Content>
      </Header>
    </div>
  );
};

export default BeerJumbo;
