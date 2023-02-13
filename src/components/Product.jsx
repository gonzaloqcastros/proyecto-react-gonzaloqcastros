import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Select, Stack, Text, SimpleGrid, Spinner, Center } from "@chakra-ui/react";

const Product = ({
  product,
  addToCart,
  loading,
}) => {

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  return (
    <Center>
      <SimpleGrid columns={1}>
          {loading && (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          )}
      <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
        <img src={product.imagen} alt={product.nombre} />
        <Box p="6">
          <Stack spacing={4}>
            <Text fontWeight="bold">{product.nombre}</Text>
            <Text fontWeight="medium">{product.precio}</Text>
            <Text>{product.descripcion}</Text>
            <FormControl>
              <FormLabel htmlFor="quantity">Cantidad</FormLabel>
              <Select id="quantity" value={quantity} onChange={handleQuantityChange}>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </FormControl>
            <Button onClick={handleAddToCart}>Añadir al carrito</Button>
          </Stack>
        </Box>
      </Box>
      </SimpleGrid>
    </Center>
  );
};

export default Product;