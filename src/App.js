import React, { Component } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CurrencyList from './CurrencyList';

class App extends Component {
  render() {
    return (
<Container>
  <Row>
    <Col className="text-center py-5" md={{ span: 8, offset: 2 }}>
      <h1>Gengi gjaldmiðla</h1>
    </Col>
  </Row>
  <Row>
    <Col md={{ span: 6, offset: 3 }}>
      <CurrencyList />
    </Col>
  </Row>
</Container>
    );
  }
}

export default App;
