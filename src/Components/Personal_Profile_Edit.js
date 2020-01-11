import React from 'react';
import {Row,Col} from 'react-bootstrap'; 
import {Button,TextField} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';


//金額コンポーネント


function Sentence_Edit(){
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
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

export default function Personal_Profile_Edit(){
    return(
        <dev>
            <Sentence_Edit/>
        </dev>
    );
}