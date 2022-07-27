import {ReactChild} from 'react';
import {Modal as ModalChakra,ModalBody, ModalContent, ModalOverlay} from '@chakra-ui/react';

type Props = {
  children: ReactChild,
  open: boolean,
  handleClose: () => void
};

export function Modal({children, open, handleClose}: Props) {
  return (

    <ModalChakra isOpen={open} onClose={handleClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalBody>
          {children}
        </ModalBody>
      </ModalContent>
    </ModalChakra>
  );
};