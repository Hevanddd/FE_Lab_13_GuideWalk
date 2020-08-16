import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const AlertDialog = ({ handleCancelOnClick }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgreeButton = () => {
    setOpen(false);
    handleCancelOnClick();
  };

  return (
    <div>
      <Button variant='contained' color='default' onClick={handleClickOpen}>
        Cancel Route
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Cancel Route?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            If you cancel the route, you will be able to go through it another time
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Disagree
          </Button>
          <Button onClick={handleAgreeButton} color='primary' autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
