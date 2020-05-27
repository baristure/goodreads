import React from 'react';
import PropTypes from 'prop-types';
import  { Container, Row, Col } from 'reactstrap';

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
								<Col sm={8} key={book._id} book={book}>
									{book.title}
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