import React, { useState } from "react";
import { Container, Box, Heading, Text, Button } from "@chakra-ui/react";

const Product = ({ loading, product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <Container maxW="container.lg">
      <Box>
        <Heading as="h2" mb={4}>
          {product.nombre}
        </Heading>
        <Text mb={4}>{product.descripcion}</Text>
        <Text mb={4}>Precio: {product.precio}</Text>
        <input
          type="number"
          value={quantity}
          onChange={handleChange}
          min={1}
        />
        <Button onClick={handleAddToCart}>Agregar al carrito</Button>
      </Box>
    </Container>
  );
};

export default Product;
