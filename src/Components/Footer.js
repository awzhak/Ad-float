import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Github,Twitter} from '../ProjectIcons';

export default function Footer(){
  return(
    <body className="footer">
      <div className="aweiof">
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
            <div className="aad32">
              <Twitter/>
              <Github/>
            </div>
          </Col>
        </Row>
      </div>
      <div className="aaai">
        ©2019 - T.M.SKY
      </div>

    </body>
  );
}