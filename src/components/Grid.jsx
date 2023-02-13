import { Center, Container, Divider, SimpleGrid, Spinner, Stat, StatLabel, StatNumber, Text, Box } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const Grid = ({
  products,
  loading,
  getProduct,
  deleteProduct,
  addToCart,
  removeFromCart,
  totalPrice,
  isCartEmpty,
}) => {
  const path = useLocation().pathname;
  return (
    <Center>
      <SimpleGrid columns={3} spacing="20px">
        {loading && (
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        )}
        {products &&
          products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                imagen={product.imagen}
                nombre={product.nombre}
                precio={product.precio}
                descripcionCorta={product.descripcionCorta}
                type={product.type}
                quantity={product.quantity}
                getProduct={getProduct}
                deleteProduct={deleteProduct}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            );
          })}
          <Divider />
          </SimpleGrid>
          {path === "/cart" ? (
          isCartEmpty ? (
            <Center>
              <Text fontSize='5xl'>
                El carrito está vacío.
              </Text>
            </Center>
          ) : (
            <>
            <Container mt={10}>
              <Stat>
                <StatLabel>Precio total</StatLabel>
                <StatNumber>${totalPrice}</StatNumber>
              </Stat>
            </Container>
          </>
          )
        ) : null}
      
      </Center>
  );
};

export default Grid;
