import React from 'react';
import {Row,Col,Card} from 'react-bootstrap'; 
import {Button,TextField} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
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
          marginBottom:90
         }}
      >
        <Col md={{ span: 4, offset: 11 }}>
          <Button variant="outlined" color="primary">
            投稿
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


//defaultコンポーネント
export default function CompanyPost(){
    return(
        <dev>
            <SentenceEdit/>
        </dev>
    );
}