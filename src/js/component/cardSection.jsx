import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const CardSection = () => {
    return (
        <Container>
            <Row className="text-center">
                {[1, 2, 3, 4].map((_, index) => (
                    <Col md={3} key={index}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src="https://via.placeholder.com/500x325" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default CardSection;
