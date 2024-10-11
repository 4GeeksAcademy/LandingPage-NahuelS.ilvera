import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Jumbotron = () => {
    return (
        <Container className="my-5">
            <div className="p-5 mb-4 bg-light rounded-3 text-start">
                <h1 className="display-4">A Warm Welcome!</h1>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
                    ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid
                    similique quaerat nam nobis illo aspernatur vitae fugiat numquam
                    repellat.
                </p>
                <Button variant="primary" size="lg">Call to action!</Button>
            </div>
        </Container>
    );
};

export default Jumbotron;
