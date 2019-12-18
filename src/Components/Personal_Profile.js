import React,{useState} from 'react';
import {Collapse,Container,Row,Col} from 'react-bootstrap'; 
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';



//プロフィールの紹介文コンポーネント
function Sentence(){
  const Line = {
    
  };

  return(
    <dev>
      <container>
        <Row 
        style={{marginTop:50,
                marginLeft:20,
                marginRight:30
              }}
        >
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={12} md={8}>
            <p className="line_left">test</p>
          </Col>
        </Row>
      </container>
    </dev>
  );
}

//collapse menuのコンポーネント
function Collapse_button(){
  const [open,setOpen] = useState(false);

  return(
    <dev>
      <IconButton aria-label="delete" size="small"
      onClick={() => setOpen(!open)}
      aria-controls="example-collapse-text"
      aria-expanded={open}
      >
        <ArrowDownwardIcon fontSize="inherit" />
      </IconButton>

      <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </dev>
  );
}

//プロフィールメインのコンポーネント
export default function Person_Profile(){
  return(
    <div>
      <Sentence/>
      <br/>
      <Collapse_button/>
    </div>
  );
}