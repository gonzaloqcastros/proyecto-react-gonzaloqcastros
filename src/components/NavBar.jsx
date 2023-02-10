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
        <Box bg="white" py={3} px={5}>
          <FaHome color="teal" />
        </Box>
      </Link>
      <Tabs colorScheme="green" background="blackAlpha.900">
        <TabList color="white">
          {unique.map((type) => {
            return <Tab key={type}>(type)</Tab>;
          })}
        </TabList>
      </Tabs>
      <Flex>
        <Link to="create">
          <Box bg="black" py={3} px={5}>
            <AiFillPlusSquare color="teal" />
          </Box>
        </Link>
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
