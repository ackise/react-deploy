import React from 'react'

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MuiTypography from '@material-ui/core/Typography';

import { theme } from '../Body/Section4/Section4';
import { connect, useDispatch } from 'react-redux';
import { toggleModal } from '../../redux/modal/modalActions';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    fontSize:'24px',
    color:'#000000',
    
  },
  title:{
    fontFamily:'OpenSans, sans-serif'
  },
  closeButton: {
    width: '12px',
    height: '12px',
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: '#7b7b7b',
  },
});

const useStyles = makeStyles(() =>({
button:{
    width: '80px',
    height:'38px',
    borderRadius: '4px',
    backgroundColor: '#ef5b4c',
    color: '#fff',
    textTransform:'none',
    fontWeight:'600'
}
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" className={classes.title}>{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),    
  },
  
}))(MuiDialogContent);

const Typography = withStyles((theme)=>({
  root:{
    fontFamily:'OpenSans, sans-serif',
  },
  gutterBottom:{
    fontSize: '16px',
    color: '#4c4b4b'
  }
}))(MuiTypography);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  
}))(MuiDialogActions);

const Modal = (props)=> {
 const {modalIsOpen,text} = props
 console.log(props)
const classes = useStyles();
const dispatch = useDispatch()


  return (
    <div>
      <Dialog onClose={()=>dispatch(toggleModal())} aria-labelledby="customized-dialog-title" open={modalIsOpen}>
        <DialogTitle id="customized-dialog-title" onClose={()=>dispatch(toggleModal())}>
          {text === '' ?  'Congratulations' : 'Oops'}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {text === '' ? 'You have successfully passed the registration'  : text }
            
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>dispatch(toggleModal())} color="primary" className={classes.button}>
            {text === '' ?  'Great' :  'Try again'}
            
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    modalIsOpen: state.modal.modalIsOpen,
  };
};


export default connect(mapStateToProps) (Modal)
