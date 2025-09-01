import { Container, VStack, Text, SimpleGrid} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard'

function HomePage() {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts])

  console.log("Products:", products);
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign="center"
        >
          Current Products 🚀
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color={"gray.500"}
        >
          No products found ಥ_ಥ.
          
          <Text color='blue.500' _hover={{textDecoration: 'underline'}}>
            <Link to='/create'>
            Create a product
            </Link>
          </Text>
        </Text>
      </VStack>
    </Container>
  );

}

export default HomePage