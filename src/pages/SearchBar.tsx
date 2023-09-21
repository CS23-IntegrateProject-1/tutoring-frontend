import { Input } from "@chakra-ui/react";
import { FC } from "react";

interface SearchBarProps {
  searchFilter: string;
  setSearchFilter: (filter: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  searchFilter,
  setSearchFilter,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setSearchFilter(newFilter);
    console.log(searchFilter);
  };

  return (
    <Input
      placeholder="search here"
      value={searchFilter}
      onChange={handleInputChange}
      width={{ base: "100%", sm: "300px" }}
    />
  );
};
