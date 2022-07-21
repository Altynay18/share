// @flow
import * as React from 'react';
import {Backdrop, Fade, Modal} from '@mui/material';
import {ReactChild, useState} from 'react';
import styles from './Modal.module.scss';

<<<<<<< HEAD
function Modal() {

  //TODO: complete Modal component


  return (
    <div>Modal</div>
  )
}
=======
type Props = {
  children: ReactChild,
  open: boolean,
  handleClose: () => void
};
>>>>>>> d842ab21b3c3e3557b14e7a8e0af95c0e4061ec4

export function ModalWrapper({children, open, handleClose}: Props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={styles.modal}>
          {children}
        </div>
      </Fade>
    </Modal>
  );
};