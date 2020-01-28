import React, {useState, useEffect} from 'react';
import {Row,Col,Card} from 'react-bootstrap'; 
import {Button,TextField} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone';
import { useDispatch, useSelector } from "react-redux";


import firebase from 'firebase/app';
import {db} from '../firebase/index';
import {storage} from '../firebase/index';


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
      prefix="¥"
    />
  );
}

NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

//詳細コンポーネント
function SentenceEdit(props){
  const [file, setFile] = useState(null)
  const [company, setCompany] = useState('')
  const [time, setTime] = useState('')
  const [money, setMoney] = useState('')
  const [desc, setDesc] = useState('')
  const [title,setTitle] = useState('')
  const storageRef = storage.ref()


  const handleCompany = (event) => {
    setCompany(event.target.value)
  }

  const handleTime = (event) => {
    setTime(event.target.value)
  }

  const handleMoney = (event) => {
    setMoney(event.target.value)
  }
  const handleDesc = (event) => {
    setDesc(event.target.value)
  }

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleClick = (event) => {
    const uploadTask = storageRef.child(`${file[0].name}`).put(file[0])
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        console.log('snapshot', snapshot)
      },
      (error) => {
        console.log('err', error)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          const adRef = db.collection('form').add({
            company: company,       // 企業名
            limit: selectedDate,          //期限
            money: values.numberformat,         //金額
            postcount: 0,        //ポストカウント
            userId: props.id,   // ユーザーID
            description: desc,  // 説明
            image: downloadURL, //イメージＵＲＬ
            title: title,        //タイトル
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
        })
      }
    )
  };

  const [values, setValues] = React.useState({
    textmask: '(1  )    -    ',
    numberformat: '',
  });
  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value,
    });
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());
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
          marginBottom:50
         }}
      >

        <Col xs={12} md={5}>
          <DropzoneArea
            dropzoneText="Upload File"
            filesLimit={1}
            showPreviews={false}
            showPreviewsInDropzone={true}
            showFileNamesInPreview={true}
            showFileNames={true}
            onChange={file => (setFile(file))}
          />
        </Col>
        <Col xs={6} md={6}
          style={{marginTop:10}}
        >
          <Row>
            <Col md={4}>
              <p className="sen" style={Line_Left}>タイトル</p>
            </Col>
            <Col md={7} style={Line_Right}>
              <TextField 
              id="standard-basic" 
              label="タイトル名" 
              onChange={(e) => handleTitle(e)}
              value={title}
              />
            </Col>
            <Col md={4}>
              <p className="sen" style={Line_Left}>募集団体名</p>
            </Col>
            <Col md={7} style={Line_Right}>
              <TextField 
              id="standard-basic" 
              label="団体名" 
              onChange={(e) => handleCompany(e)}
              value={company}
              />
            </Col>
            <Col md={4}>
              <p className="sen" style={Line_Left}>募集期日</p>
            </Col>
            <Col md={5} style={Line_Right}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify="space-around">
                  <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="yyyy/MM/dd"
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
          <Form.Control
          as="textarea" 
          rows="10" 
          onChange={(e) => handleDesc(e)}
          value={desc}
          />
        <Col md={{ span: 1, offset: 11 }}>
          <Button 
          variant="outlined" 
          color="primary"
          onClick={(e) => handleClick(e)}
          style={{marginTop:20 }}>
            投稿
          </Button>
        </Col>
      </Row>
    </dev>
  );
}


//defaultコンポーネント
export default function PersonalProfileEdit(){
  const uid = useSelector(state => state.uid.uid);
    return(
        <dev>
            <SentenceEdit id={uid}/>
        </dev>
    );
}