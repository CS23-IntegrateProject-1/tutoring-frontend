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
  FormControl,
  FormLabel,
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
}

export const AddModal: FC<ModalProps> = (props) => {
  const [newRestaurant, setNewRestaurant] = useState<RestaurantProps>({
    id: 0,
    name: "",
    location: "",
    numberOfEmployee: 0,
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
      `Integration part\nrestaurant: ${newRestaurant.name}\nlocation: ${newRestaurant.location}\nNumber of Employee: ${newRestaurant.numberOfEmployee}`,
    );
  };
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Restaurant</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              placeholder="Name"
              mb={"1em"}
              value={newRestaurant.name}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Location</FormLabel>
            <Input
              name="location"
              placeholder="Location"
              mb={"1em"}
              value={newRestaurant.location}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Number of Employee</FormLabel>
            <Input
              name="numberOfEmployee"
              placeholder="Number of Employee"
              mb={"1em"}
              type="number"
              value={newRestaurant.numberOfEmployee}
              onChange={handleInputChange}
            />
          </FormControl>
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