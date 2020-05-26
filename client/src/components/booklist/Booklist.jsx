import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
		marginTop: 15,
	},
	card: {
		padding: theme.spacing(3),
		textAlign: 'center',
	}
}));


const BookList = ({ books }) => {
	const classes = useStyles();

	const emptyMessage = (
		<p>There are no movies yet.</p>
	);
	const bookList = (
		<div>
			{
				books.error.response
					? <h3>Error retrieving data!</h3>
					:
					<Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
						{books.bookList.map((book) => (
							<Grid item noWrap key={book._id} book={book}>
								<Card className={classes.card}>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Contemplative Reptile"
											height="140"
											image={book.img}
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{book.title}
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												{book.description}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						))}
					</Grid>
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