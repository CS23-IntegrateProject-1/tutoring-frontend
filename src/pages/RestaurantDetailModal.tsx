import {
  Heading,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RestaurantDetailModal extends ModalProps {
  id: number;
  name: string;
  location: string;
  numberOfEmployee: number;
}

export const RestaurantDetailModal: FC<RestaurantDetailModal> = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={{ base: "xs", sm: "md", md: "lg" }}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody padding={"2em"}>
          <Heading mb="0.5em">{props.name}</Heading>
          <Text>Location: {props.location}</Text>
          <Text>Number of Employee: {props.numberOfEmployee}</Text>
        </ModalBody>

        {/* <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter> */}
      </ModalContent>
    </Modal>
  );
};
