import { Text } from "@chakra-ui/react";

const Product = ({ product }) => {
  return (
    <div>
      <Text fontSize="5xl">{product.title}</Text>
    </div>
  );
};

export default Product;
