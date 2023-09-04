import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} width="270px" />
    </HStack>
  );
};

export default Navbar;
