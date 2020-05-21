import React from 'react';
import PropTypes from 'prop-types';


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
					<div >
						{books.bookList.map((book) => (<div key={book._id} book={book} >{book.title}</div>))}
					</div>
			}
		</div>
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