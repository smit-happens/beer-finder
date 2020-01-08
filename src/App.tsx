import React from 'react';
import logo from './logo.svg';
import Header from './Header';

import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class App extends React.Component {
  public render() {
    return (
      <Container className="p-3">
        <Row>
          <Col>
          <ul className="list-group">
            <li className="list-group-item list-group-item-action active">Cras justo odio</li>
            <li className="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
            <li className="list-group-item list-group-item-action">Morbi leo risus</li>
            <li className="list-group-item list-group-item-action">Porta ac consectetur ac</li>
            <li className="list-group-item list-group-item-action">Vestibulum at eros</li>
          </ul>
          </Col>
          <Col>
              <img src={logo} className="App-logo" alt="logo" />
              <Header name="REACT" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
