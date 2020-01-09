import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'

function LatestPosts() {
    return (
      <>
      <div class="grid js-masonry" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 15 }'>
        <div class="grid-item">
          <Card style={{ width: '12rem' }}>
            <Card.Img variant="top" src="aaa.svg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      </>
    );
  }
  
  export default LatestPosts;