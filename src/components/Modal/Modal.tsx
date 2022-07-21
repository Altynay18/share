// @flow
import * as React from 'react';
import {Backdrop, Fade, Modal} from '@mui/material';
import {ReactChild, useState} from 'react';
import styles from './Modal.module.scss';
import DefaultButton from '../DefaultButton';

type Props = {
  children: ReactChild,
  open: boolean,
  handleClose: () => void
};

export function ModalWrapper({children, open, handleClose}: Props) {
  // const [close, setClose] = useState(false);

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
          <DefaultButton bgColor='#BCD7DA' children={'Закрыть'}></DefaultButton>
        </div>

      </Fade>

    </Modal>
  );
};