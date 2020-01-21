import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import {Github,Twitter} from '../ProjectIcons';

export default function Footer(){
  return(
    <body className="footer">
      <Container>
        <Row>
          <Col>
            <div className="aaaa">
              利用規約
              <br></br>
              <br></br>
              Mail： AdFloat@adfloat.onion
              <br></br>
              <br></br>
              利用規約
            </div>
          </Col>
          <Col>
            <Github/>
            <Twitter/>
          </Col>
        </Row>
      </Container>
      <div className="aaai">
        ©2019 - T.M.SKY
      </div>

    </body>
  );
}