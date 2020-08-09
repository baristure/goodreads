import React from "react";


import { Row, Container, Col, Image, Card, Table } from "react-bootstrap";

const BookDetail = ({ book }) => {
  const emptyMessage = <p>Book data can not found :(</p>;

  const bookView = (
    <div>
      <Container>
        <Row className="mt-2 p-3">
          <Col xs={6} md={4}>
            <Image src={book.book.img} rounded />
          </Col>
          <Col xs={6} md={8}>
            <Card body>
              <h1>{book.book.title}</h1>
            </Card>
            <Card body>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td className="w-25">Author:</td>
                    <td>{book.book.author}</td>
                  </tr>
                  <tr>
                    <td className="w-25">Publisher:</td>
                    <td>{book.book.author}</td>
                  </tr>
                  <tr>
                    <td>Language:</td>
                    <td>{book.book.title}</td>
                  </tr>
                  <tr>
                    <td>Number of Pages:</td>
                    <td>{book.book.title}</td>
                  </tr>
                </tbody>
              </Table>
              <Card.Text className="mt-2 p-5">
                {book.book.description}
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );

  return <div>{bookView ? bookView : emptyMessage}</div>;
};

export default BookDetail;
