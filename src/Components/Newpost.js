import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from './Card'
import {DropzoneArea, DropzoneDialog} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';

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

export default function LayoutTextFields() {
  const classes = useStyles();

  const [file, setFile] = useState(null)

  return (
    <div className={classes.root}>
        <Card />
        <div className={classes.text}>
            <TextField
                required
                style={{ margin: '20px auto' ,width: '500px'}}
                id="outlined-required"
                label="タイトル"
                variant="outlined"
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
                />
            </div>
            <Button style={{ marginBottom: 200 ,width: '500px'}}
                variant="contained" color="primary" disableElevation>
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