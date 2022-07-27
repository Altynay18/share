import Backdrop from '@mui/material/Backdrop';
import ModalMui from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import {ReactChild} from 'react';
import styles from './Modal.module.scss';
import DefaultButton from '../DefaultButton';
import {COLORS} from '../../constants';

type Props = {
  children: ReactChild,
  open: boolean,
  handleClose: () => void
};

export function Modal({children, open, handleClose}: Props) {
  return (
    <ModalMui
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
          <DefaultButton bgColor={COLORS.YELLOW}  >Закрыть</DefaultButton>
        </div>
      </Fade>
    </ModalMui>
  );
};