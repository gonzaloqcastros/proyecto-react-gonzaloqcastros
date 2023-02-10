import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

const Grid = ({
  products,
  loading,
  getProduct,
  deleteProduct,
  addToCart,
}) => {
  return (
    <Center>
      <SimpleGrid columns={2}>
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
                descripcion={product.descripcion}
                type={product.type}
                getProduct={getProduct}
                deleteProduct={deleteProduct}
                addToCart={addToCart}
              />
            );
          })}
      </SimpleGrid>
    </Center>
  );
};

export default Grid;
