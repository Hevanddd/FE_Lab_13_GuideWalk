import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import './modal.scss';

function getModalStyle() {
  const left = 0;
  const top = 0;
  const right = 0;
  const bottom = 0;

  return {
    top,
    left,
    right,
    bottom,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const ModalComponent = ({ isOpenModal, setIsOpenModalClose }) => {
  console.log(isOpenModal);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(isOpenModal);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseButton = () => {
    setIsOpenModalClose();
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id='simple-modal-title'>You have successfully completed the route.</h3>
      <img src={require('../../img/ok.svg')} alt='ok' />
      <p id='simple-modal-description'> I hope you were interested in going through it :)</p>
      <Button onClick={handleCloseButton} color='primary' variant='contained'>
        Close
      </Button>
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      {body}
    </Modal>
  );
};
