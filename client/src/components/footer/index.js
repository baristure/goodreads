import React from "react";
import { Navbar, Col } from "react-bootstrap";
import Emoji from "a11y-react-emoji";

const Footer = () => {
  return (
    <Navbar className="mt-2" bg="primary" fixed="relative">
      <Col md={{ span: 6, offset: 3 }}>
        <div>
          Made with <Emoji symbol="💕" label="love" /> by Barış TÜRE
        </div>
        <div>
          Source code is available on my{" "}
          <a
            className="text-white"
            href="https://github.com/baristure"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub page
          </a>
        </div>
        <div>
          The app is not created by, affiliated with, or supported by Goodreads,
          Inc
        </div>
      </Col>
    </Navbar>
  );
};
export default Footer;
