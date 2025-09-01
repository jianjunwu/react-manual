import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

import {
  Box,
  IconButton,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  useColorModeValue,
  useToast, 
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";

import { useProductStore } from "../store/product";
import { useState } from "react";
// 移除了错误的后端导入

const ProductCard = ({ product }) => { 
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

    const {deleteProduct, updateProduct} = useProductStore();

    const toast = useToast();
    const handleDeleteProduct = async (pid) => {
      const { success, message } = await deleteProduct(pid);

      if (!success) {
        toast({
          title: "Error",
          description: message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        // 添加成功删除的提示
        toast({
          title: "Success",
          description: message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    };

    const { isOpen, onOpen, onClose } = useDisclosure();
    const handelUpdateProduct = async (pid, updatedProduct) => {
        const {success, message} = await updateProduct(pid, updatedProduct);
        if (!success) {
            toast({
                title: "Error",
                description: message,
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "top",
            });
        } else {
            toast({
                title: "Success",
                description: message,
                status: "success",
                duration: 5000,
            })
        }
        onClose();

    };
    return (
        <Box
        shadow={"lg"}
        rounded={"lg"}
        overflow={"hidden"}
        transition={"all 0.3s"}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
        bg={bg}
        >
            <Image src={product.image} alt={product.name} h={48} w='full' objectFit={"cover"} />
            <Box p={4}> 
                <Heading as='h3' size='md' mb={2}>
                    {product.name}
                </Heading>
                <Text fontWeight='bold' fontSize='xl' color={textColor}>${product.price}</Text>

                <HStack spacing={2}> 
                    <IconButton icon={<EditIcon />} 
                    onClick={onOpen} 
                    colorScheme='blue' />
                    <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme='red' />
                </HStack>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent> 
                    <ModalHeader>Edit Product</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody> 
                        <VStack spacing={4}> 
                            <Input placeholder='Product Name' name="name" value={updatedProduct.name} 
                            onChange={(e) => setUpdatedProduct({...updatedProduct, name: e.target.value})}
                            />
                            <Input placeholder='Product Price' name="price"  value={updatedProduct.price} 
                            onChange={(e) => setUpdatedProduct({...updatedProduct, price: e.target.value})}
                            />
                            <Input placeholder='Image URL' name="image" value={updatedProduct.image} 
                            onChange={(e) => setUpdatedProduct({...updatedProduct, image: e.target.value})}
                            />
                        </VStack>
                    </ModalBody>

                    <ModalFooter> 
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost' onClick={() => handelUpdateProduct(updatedProduct._id, updatedProduct)}>Save</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Box>
    );
};

export default ProductCard;