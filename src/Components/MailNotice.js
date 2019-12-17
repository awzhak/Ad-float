import React, { useState, useRef } from 'react';
import { Overlay } from "react-bootstrap";
import {ButtonToolbar, Popover} from "react-bootstrap";
import {ListGroup, Card} from "react-bootstrap";
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail'
import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles(() => ({
    badge: {
      top: 13,
    },
  }))(Badge);

function MailNotice() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    // api通信→いいねn件ある
    const loveMail = 10;
    // api通信→DMが5件きました
    const directMail = 5;
    // api通信→ランクインした
    const rankMail = 1;

    const sum = loveMail + directMail + rankMail;

    const handleClick = (event) => {
      setShow(!show);
      setTarget(event.target);
    };

    const onHide = () => {
        setShow(!show);
    }

    return (
        <div clasName="Mail-Notice">
      <ButtonToolbar ref={ref}>
      <IconButton onClick={handleClick} aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={sum} color="secondary">
            <MailIcon />
          </Badge>
      </IconButton>

        <Overlay
          show={show}
          target={ref.current}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
          onHide={onHide}
          rootClose={true}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3" className="font-black">メール一覧</Popover.Title>
            <Popover.Content>
            <Card style={{ width: '17rem' }}>
            <ListGroup variant="flush">
            { loveMail ? <Card.Link　href="#"><ListGroup.Item>Loved
                        <StyledBadge className="right" badgeContent={loveMail} color="secondary"></StyledBadge>
                         </ListGroup.Item></Card.Link> :''}
            { directMail ? <Card.Link　href="#"><ListGroup.Item>DirectMail
                        <StyledBadge className="right" badgeContent={directMail} color="secondary"></StyledBadge>
                         </ListGroup.Item></Card.Link> :''}
            { rankMail ? <Card.Link　href="#"><ListGroup.Item>Rank IN
                        <StyledBadge className="right" badgeContent={rankMail} color="secondary"></StyledBadge>
                         </ListGroup.Item></Card.Link> :''}
            </ListGroup>
            <Card.Link className="right" href="#">通知一覧　</Card.Link>
            </Card>
            </Popover.Content>
          </Popover>
        </Overlay>
      </ButtonToolbar>
      </div>
    );
  }

export default MailNotice;