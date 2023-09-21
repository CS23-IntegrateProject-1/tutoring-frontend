import {
  Box,
  Heading,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  Text,
  Button,
} from "@chakra-ui/react";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddModal: FC<ModalProps> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody padding={"2em"}>
          <Heading>{}</Heading>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
