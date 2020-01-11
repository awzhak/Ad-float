import React,{useState} from 'react';
import {Collapse,Row,Col} from 'react-bootstrap'; 
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';

//プロフィールの紹介文コンポーネント
function Sentence(){
  const Line_Left={
    fontSize:20,
    fontWeight:900,
    marginBottom:60
  };
  const Line_Right={
    fontSize:20
  };

  return(
    <dev>
        <Row 
        style={{marginTop:50,
                marginLeft:70,
                marginRight:70,
              }}
        >
          <Col md={{ span: 4, offset: 11 }}>
            <Button variant="outlined" color="primary">
              編集
            </Button>
          </Col>
          <Col xs={12} md={4}>
            xs=12 md=5
          </Col>
          <Col xs={6} md={7}
          style={{marginTop:10}}
          >
            <Row>
              <Col md={4}>
                <p className="sen" style={Line_Left}>募集企業</p>
              </Col>
              <Col md={7} style={Line_Right}>
                株式会社example
              </Col>
              <Col md={4}>
                <p className="sen" style={Line_Left}>募集期間</p>
              </Col>
              <Col md={7} style={Line_Right}>
                2019/12/01～2020/03/01
              </Col>
              <Col md={4}>
                <p className="sen" style={Line_Left}>報酬金範囲</p>
              </Col>
              <Col md={7} style={Line_Right}>
                1,000円～50,000円
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <p className="sen" style={{fontSize:20,fontWeight:900}}>案件詳細</p>
            <Col md={2} style={{fontSize:20}}>
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </Col>
          </Col>
        </Row>
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