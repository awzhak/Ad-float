import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";


import { Row, Col } from 'react-bootstrap';

import { Fab  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Github, Twitter } from './../ProjectIcons';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '150px',
    width: '100%',
    minWidth: '420px',
    backgroundColor: '#EEEEEE',
    fontSize: '15px',
    bottom: 0
  },
  items: {
    padding: '20px'
  },
  aaaa: {
    paddingTop: '10px',
    color: '#00000f',
    position: 'relative'
  },
  siteicons: {
    textAlign: 'right',
    paddingRight: '20px',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  margin: {
    margin: theme.spacing(1),
  },
  copyright: {
    textAlign: 'center',
    fontSize: '13px',
    color: '#000003',
    paddingBottom: 3,
    marginBottom: 0
  }
}));

export default function Footer(){
  const classes = useStyles();
  const rendfooter = useSelector(state => state.footer.footer);

  let Ftt = (
    <div className={classes.root}>
      <div className={classes.items}>
        <Row>
          <Col>
            <div className={classes.aaaa}>
              <p>利用規約</p>
              <p>Mail： AdFloat@adfloat.onion</p>
            </div>
          </Col>
          <Col>
            <div className={classes.siteicons}>
              <Fab size="medium" className={classes.margin} target="_blank" href="https://twitter.com/micrm1">
                <Twitter/>
              </Fab >
              <Fab size="medium" className={classes.margin} target="_blank" href="https://github.com/micrm1/Ad-float">
                <Github/>
              </Fab >
            </div>
          </Col>
        </Row>
      </div>
      <p className={classes.copyright}>©2019 - T.M.SKY</p>
    </div>
  );

  useEffect(() => {
    Ftt = (
      <div className={classes.root}>
        <div className={classes.items}>
          <Row>
            <Col>
              <div className={classes.aaaa}>
                <p>利用規約</p>
                <p>Mail： AdFloat@adfloat.onion</p>
              </div>
            </Col>
            <Col>
              <div className={classes.siteicons}>
                <Fab size="medium" className={classes.margin} target="_blank" href="https://twitter.com/micrm1">
                  <Twitter/>
                </Fab >
                <Fab size="medium" className={classes.margin} target="_blank" href="https://github.com/micrm1/Ad-float">
                  <Github/>
                </Fab >
              </div>
            </Col>
          </Row>
        </div>
        <p className={classes.copyright}>©2019 - T.M.SKY</p>
      </div>
    );
    console.log(rendfooter)
  }, [rendfooter])

  return(
    <>
      {Ftt}
    </>
  );
}