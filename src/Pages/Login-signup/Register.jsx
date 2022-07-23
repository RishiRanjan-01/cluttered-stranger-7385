import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Image,
    HStack,
    useColorModeValue,
  } from "@chakra-ui/react";
import { useState } from "react";
  import { Link as RouterLink } from "react-router-dom";
  import Navbar from "../Components/Navbar";
  import {useDispatch} from "react-redux"
import { setloginEmailData } from "../Redux/AuthReducer/action";
  
  export default function Register() {
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleClick = () => {
      dispatch(setloginEmailData(email))
    }

    return (
      <>
      <Navbar/>
        <Flex minH={"40vh"} align={"center"} justify={"center"}>
          {/* // bg={useColorModeValue('gray.50', 'gray.800')}> */}
          <Stack spacing={1} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"2xl"}>Sign in or create an account</Heading>
              <Text fontSize={"lg"} color={"gray.600"}></Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" placeholder="Email Address" onChange={(e) =>  setEmail(e.target.value)} />
                </FormControl>
  
                <Stack>
                  <RouterLink to="/registersecond" color={"blue.400"}>
                    <Button
                     bg={"rgb(105, 138, 242 )"}
                     onClick={handleClick}
                     h={"50px"}
                     w={"300px"}
                     color={"white"}
                     _hover={{
                       bg: "blue.700",
                     }}
                    >
                      Continue with email
                    </Button>
                  </RouterLink>
                </Stack>
                <Stack pt={2}>
                  <Text align={"center"}>or use omne of these option</Text>
                </Stack>
                <HStack spacing="30px" justifyContent={"center"}>
                <Box border="1px solid rgb(230,230,230)" p="15px">
                <Image
                  boxSize="40px"
                  objectFit="cover"
                  src="https://louisville.edu/english/images/facebookicon.png/image"
                  alt="Dan Abramov"
                />
                </Box>
                <Box border="1px solid rgb(230,230,230)" p="18px">
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
                  alt="Dan Abramov"
                />
                </Box>
                <Box border="1px solid rgb(230,230,230)" p="18px">
                <Image
                  boxSize="30px"
                  objectFit="cover"
                  src="https://img.icons8.com/material-outlined/344/iphone--v2.png"
                  alt="Dan Abramov"
                />
                </Box>
              </HStack>
                <Stack pt={2}>
                  <Text align={"center"} color={"blue"}>
                    More ways to sign in
                  </Text>
                </Stack>
                <Stack pt={2}>
                  <Text align={"center"}>
                    By sigining or createomg an account you agree with our terms &
                    Conditions and Privacy StatementLogin
                  </Text>
                </Stack>
                <Flex justifyContent={"center"}>
            <Image w="380px" h="70px" m="10px auto" src='https://i.ibb.co/bmS6pyc/image-11.png' alt='Dan Abramov' />
            </Flex>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </>
    );
  }
  