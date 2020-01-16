import React from 'react';
import {Row,Col,Card} from 'react-bootstrap'; 
import {Button,TextField} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form'

//金額コンポーネント
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="￥"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

//詳細コンポーネント
function SentenceEdit(){
  const [values, setValues] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '1320',
  });
  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date( ));
  const handleDateChange = date => {
    setSelectedDate(date);
  };

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
            保存
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
              <TextField id="standard-basic" label="企業名" />
            </Col>
            <Col md={4}>
              <p className="sen" style={Line_Left}>募集期間</p>
            </Col>
            <Col md={5} style={Line_Right}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/mm/dd"
                  margin="normal"
                  id="date-picker-inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
                </Grid>
              </MuiPickersUtilsProvider>
            </Col>
            <Col md={4}>
              <p className="sen" style={Line_Left}>報酬金範囲</p>
            </Col>
            <Col md={7} style={Line_Right}>
              <TextField
              label="英半角で入力して下さい"
              value={values.numberformat}
              onChange={handleChange('numberformat')}
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom,
              }}
              />
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <p className="sen" style={{fontSize:20,fontWeight:900}}>案件詳細</p>
        </Col>
          <Form.Control as="textarea" rows="10" />
      </Row>
    </dev>
  );
}


//商品一覧コンポーネント
const useStyles = makeStyles(theme => ({
  card: {
    width: "14rem",
    marginBottom: 15
  },
  cardgrid: {
    textAlign: "center",
    margin: 30
  }
}));

function LatestPosts() {
  const colors = ['Red','Orange','Yellow','Green','Blue','Violet'];
  const classes = useStyles();

  const latestpost = colors.map((color,index) =>
    <div class="grid-item">
      <Card className={classes.card}>
        <Card.Img variant="top" src="aaa.svg" />
        <Card.Body>
          <Card.Title>{color}</Card.Title>
          <Card.Text>
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );

  return (
    <div>
      <center style={{fontSize:30,marginTop:60,fontWeight:900}}>
        投稿一覧
      </center>
      <div className={classes.cardgrid}>
      <div class="grid js-masonry" data-masonry-options='{ "itemSelector": ".grid-item", "columnWidth": 30 }'>
        {latestpost}
      </div>
    </div>
    </div>
  );
}

//defaultコンポーネント
export default function PersonalProfileEdit(){
    return(
        <dev>
            <SentenceEdit/>
            <LatestPosts/>
        </dev>
    );
}