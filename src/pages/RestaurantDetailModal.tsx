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
import { useParams } from "react-router-dom";

interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface RestaurantDetailModal extends ModalProps {
  id: number;
  name: string;
  location: string;
  numberOfEmployee: number;
  isOpen: boolean;
}

export const RestaurantDetailModal: FC<RestaurantDetailModal> = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            ullam.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
