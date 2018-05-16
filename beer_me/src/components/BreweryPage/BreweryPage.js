import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import BreweryCards from './BreweryCards/BreweryCards';

class BreweryPage extends Component {
  render() {
    // console.log('props!!!', this.props);
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">{}</Col>
        </Row>
        <Row>
          <BreweryCards history={this.props.history} />
        </Row>
      </Container>
    );
  }
}

export default BreweryPage;