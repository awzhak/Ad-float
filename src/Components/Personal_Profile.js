import React,{useState} from 'react';
import {Collapse,} from 'react-bootstrap'; 
import IconButton from '@material-ui/core/IconButton';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


export default function Person_Profile(){
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
          <Sentence/>
        </div>
      </Collapse>
    </dev>
  );
}

function Sentence(){
  return(
    <dev>
      <br/>
      teste
    </dev>
  );
}