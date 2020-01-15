import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import LoginButton from './LoginButton';


import { Overlay, ButtonToolbar, Popover, Card, ListGroup } from "react-bootstrap";

import { Avatar, IconButton } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';


function UserIcon() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
  };
  
  const onHide = () => {
      setShow(!show);
  }

  const iconurl = useSelector(state => state.icon.icon);
  const Icon = (
    <>
      { iconurl ? (
          <Avatar 
            src={iconurl}
          />
        ):(
          <AccountCircle />
        )
      }
    </>
  );

  return(

    <div className="Mail-Notice">
      <ButtonToolbar ref={ref}>
        <IconButton onClick={handleClick} color="inherit">
          {Icon}
        </IconButton>

        <Overlay
          show={show}
          placement="bottom"
          target={ref.current}
          containerPadding={20}
          onHide={onHide}
          container={ref.current}
          rootClose={true}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3" className="font-black">sssss</Popover.Title>
            <Popover.Content>
              <Card style={{ width: '14rem' }}>
                <ListGroup variant="flush">
                  <LoginButton />
                </ListGroup>
              </Card>
            </Popover.Content>
          </Popover>
        </Overlay>
      </ButtonToolbar>
    </div>
  )
}

export default UserIcon;