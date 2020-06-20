import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row,Col, Image, Card, Button } from 'react-bootstrap';

const BookList = ({ books }) => {


	const emptyMessage = (
		<p>There are no movies yet.</p>
	);
	const bookList = (
		<div>
			{
				books.error.response
					? <h3>Error retrieving data!</h3>
					:
					<Container>
						<Row>
							{books.bookList.map((book) => (
								<Col xs={6} md={4} key={book._id} book={book}>
									<Card className="mt-2 p-3" >
										<Image src={book.img} rounded />
										<Card.Body>
											<Card.Title>{book.title}</Card.Title>
											<Card.Text>
												{book.description}
											</Card.Text>
											<Button variant="primary">Detail</Button>
										</Card.Body>
									</Card>
								</Col>
							))}
						</Row>
					</Container>
			}
		</div >
	);

	return (
		<div>
			{books.length === 0 ? emptyMessage : bookList}
		</div>
	);
};

BookList.propTypes = {
	books: PropTypes.shape({
		bookList: PropTypes.array.isRequired
	}).isRequired
};

export default BookList;