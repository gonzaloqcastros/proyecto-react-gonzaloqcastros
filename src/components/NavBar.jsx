import {
  Box,
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuItem,
  MenuList,
  Tab,
  TabList,
  Image,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = ({ products, cart }) => {
  const unique = [...new Set(products.map((item) => item.type))];

  return (
    <Flex justify="space-between" background="blackAlpha.900">
      <Link to="/">
        <Box py={6} px={5}>
          <FaHome color="white" />
        </Box>
      </Link>
      <Flex>
        <Link to="cart">
          <Box bg="teal" py={3} px={5}>
            <FaShoppingCart color="white" />
            <Text color="white">{cart.length}</Text>
          </Box>
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;
