import React, {useState, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from './NewProductionPostCard'
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
// 最上部から表示させるコンポーネント
import ScrollToTopOnMount from './ScrollToTopOnMount';

// redux
import { useDispatch, useSelector } from "react-redux";
import {useHistory, useParams} from 'react-router-dom';

//firebase
import firebase from 'firebase/app'
import {db} from '../firebase/index'
import {storage} from '../firebase/index'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'contents',
    flexWrap: 'wrap',
    position: 'absolute',
    zIndex: '-1',
  },
  text: {
    display: 'block',
    margin: '10px auto',
    width: '500px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dropzone: {
    marginBottom: 20,
  },
  droparea: {
    height: '100px'
  },
  dropzoneParagraph: {
      margin: '0px'
  },
  margin: {
      marginLeft: '20px',
      marginRight: '20px',
  },
}));

export default function LayoutTextFields(props) {
  // formIdの受け取り
  const formId = props.match.params.id
  // 現在ログイン中のユーザーID
  const uid = useSelector(state => state.uid.uid);
  const classes = useStyles();
  // 広告の情報state
  const [file, setFile] = useState(null)
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  // ストレージref
  const storageRef = storage.ref()
  const EndRef = useRef(null)
  // ルータ
  const history = useHistory();
  // スクロールハンドル
  const scrollToBottom = () => {
    EndRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
  }
  // タイトルハンドル
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  // 説明ハンドル
  const handleDescChange = (event) => {
    setDesc(event.target.value)
  }

  // 投稿ハンドル
  const handleClick = (event) => {
    console.log(file[0])
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
          console.log('File available at', downloadURL)
          // 作品投稿
          const adRef = db.collection('ad').add({
            title: title,       // タイトル
            url: downloadURL,   // 作品URL
            description: desc,  // 説明
            formId: formId,     // 募集ID
            userId: uid,   // ユーザーID
            likecount: 0,   // ライクカウント
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          })
          // 投稿数カウント
          const formRef = db.collection('form').doc(formId)
          formRef.update({
            postcount: firebase.firestore.FieldValue.increment(1.0)
          })
          console.log(adRef)  // ドキュメントID
        })
      }
    )
    history.push(`/`)
  };

  useEffect(scrollToBottom, [EndRef]);

  return (
    <div className={classes.root}>
      <ScrollToTopOnMount />
      <Button style={{ margin: 50, position: 'absolute', width: 'auto'}}
                variant="contained" color="primary" disableElevation
                onClick={() => history.goBack()}>
                ←Back
            </Button>
         {/* <Card formId={formId}/> */}
        <div className={classes.text}>
            <TextField
                ref={EndRef}
                required
                style={{ margin: '20px auto' ,width: '500px'}}
                id="outlined-required"
                label="タイトル"
                variant="outlined"
                onChange={(e) => handleTitleChange(e)}
                value={title}
                />
            <DropzoneArea
                className={classes.droparea}
                dropzoneClass={classes.dropzone}
                dropzoneParagraphClass={classes.dropzoneParagraph}
                dropzoneText="Upload File"
                filesLimit={1}
                showPreviews={false}
                showPreviewsInDropzone={true}
                showFileNamesInPreview={true}
                showFileNames={true}
                onChange={file => (setFile(file))}
            />
            <div>
                <TextField
                style={{ margin: '20px auto' ,width: '500px'}}
                id="outlined-multiline-static"
                label="コメント"
                multiline
                rows="4"
                variant="outlined"
                onChange={(e) => handleDescChange(e)}
                value={desc}
                />
            </div>
            <Button style={{ marginBottom: 20 ,width: '500px'}}
                variant="contained" color="primary" disableElevation
                onClick={(e) => handleClick(e)}>
                投稿
            </Button>
        </div>
    </div>
  );
}


// const [files, setFiles] = useState("../132-1200x899.png");
// const [open, setOpen] = useState(false);


// <Button onClick={() =>(setOpen(true))}>
//                   Add Image
//             </Button>
//             <DropzoneDialog
//                     open={open}
//                     onSave={a => (setFiles(a),setOpen(false))}
//                     acceptedFiles={['image/*']}
//                     maxFileSize={5000000}
//                     filesLimit={1}
//                     showPreviews={true}
//                     showPreviewsInDropzone={true}
//                     fullWidth={false}
//                     onClose={() => setOpen(false)}
//             />