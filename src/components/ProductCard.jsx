import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({
  imagen,
  nombre,
  precio,
  descripcion,
  type,
  id,
  getProduct,
  updateProduct,
  addToCart,
}) => {
  const path = useLocation().pathname;

  return (
    <Card maxW="sm" mt={5} mx={5}>
      <CardBody>
        <Image
          src={imagen}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Link to={`/products/${id}`}>
            <Heading size="md">{nombre}</Heading>
          </Link>
          <Text>{descripcion}</Text>
          <Text color="gray.500" fontSize="sm" fontWeight="bold">
            ${type}
          </Text>
          <Text color="green.700" fontSize="2xl">
            ${precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      {path !== "/cart" && (
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={`/products/${id}`}>
              <Button
                variant="solid"
                colorScheme="green"
                onClick={() => getProduct(id)}
              >
                Ver
              </Button>
            </Link>
            <Button
              variant="solid"
              colorScheme="yellow"
              onClick={() => updateProduct(id)}
            >
              Update
            </Button>
            <Button
              variant="solid"
              colorScheme="blue"
              onClick={() => addToCart(id)}
            >
              Agregar al carrito
            </Button>
          </ButtonGroup>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProductCard;
