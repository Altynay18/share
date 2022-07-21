// @flow
import * as React from 'react';
import {Backdrop, Fade, Modal} from '@mui/material';
import {ReactChild, useState} from 'react';
import styles from './Modal.module.scss';

type Props = {
  children: ReactChild,
  open: boolean,
  handleClose: () => void
};

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