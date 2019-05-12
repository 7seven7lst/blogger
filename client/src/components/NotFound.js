import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class NotFound extends Component {
  render() {
    return (
      <Container fluid className="mt-3">
        <Row>
          <Col xs={12}>Page Not Found 404</Col>
        </Row>
      </Container>
    );
  }
}

export default NotFound;