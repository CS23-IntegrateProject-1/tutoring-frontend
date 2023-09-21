import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalFooter,
  Button,
  Input,
} from "@chakra-ui/react";
import { FC, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface RestaurantProps {
  id: number;
  name: string;
  location: string;
  numberOfEmployee: number;
  isAvailable: boolean;
}

export const AddModal: FC<ModalProps> = (props) => {
  const [newRestaurant, setNewRestaurant] = useState<RestaurantProps>({
    id: 0,
    name: "",
    location: "",
    numberOfEmployee: 0,
    isAvailable: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewRestaurant({
      ...newRestaurant,
      [name]: name === "numberOfEmployee" ? parseInt(value) : value,
    });
  };

  const handleSave = () => {
    alert(
      `Integration part\nrestaurant: ${newRestaurant.name}\nlocation: ${newRestaurant.location}`
    );
  };
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add restaurant</ModalHeader>
        <ModalCloseButton />
        <ModalBody padding={"1em"}>
          <Input
            name="name"
            placeholder="Name"
            mb={"1em"}
            value={newRestaurant.name}
            onChange={handleInputChange}
          />
          <Input
            name="location"
            placeholder="Location"
            mb={"1em"}
            value={newRestaurant.location}
            onChange={handleInputChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={props.onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
