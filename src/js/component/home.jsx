import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Home = () => {
	return (
		<div>
			{/* The Navbar section */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="#">Start Bootstrap</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link active" href="#">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Services</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{/* JumboTron */}
			<Container className="my-5 ">
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

			{/* Tarjetas */}
			<Container>
				<Row className="text-center">
					<Col md={3}>
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
					<Col md={3}>
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
					<Col md={3}>
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
					<Col md={3}>
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
				</Row>
			</Container>
		</div>
	);
};

export default Home;
