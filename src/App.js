import React, { useState } from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    const response = await axios.get('https://randomuser.me/api/');
    const data = response.data.results[0];
    setUser(data);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Button onClick={fetchUser}>Get Random User</Button>
        </Col>
      </Row>
      {user && (
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Card>
              <Card.Img variant="top" src={user.picture.large} />
              <Card.Body>
                <Card.Title>{`${user.name.title} ${user.name.first} ${user.name.last}`}</Card.Title>
                <Card.Text>
                  {`Age: ${user.dob.age}`}
                  <br />
                  {`Email: ${user.email}`}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
