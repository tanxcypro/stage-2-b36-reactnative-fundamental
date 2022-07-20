import * as React from "react";

//Import Component Native Base
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  Icon,
  IconButton,
  HStack,
  Divider,
} from "native-base";

export default function FormNativeBase() {
  return(
    <Box
      safeArea
      bg="primary.100"
      flex={1}
      p={10}
      w="100%"
      mx="auto"
      justifyContent="center"
    >

      <Heading color="primary.800" size="lg">
        Welcome
      </Heading>

      <Heading color="primary.800" size="lg">
        Sign in to continue!
      </Heading>

      <VStack space={2} mt={5}>
        <FormControl>
          <FormControl.Label _text={{color: 'primary.600', fontWeight: 'bold', fontSize:'sm'}}>
            Email
          </FormControl.Label>
          <Input />

          <FormControl.Label _text={{color: 'primary.600', fontWeight: 'bold', fontSize:'sm'}}>
            Password
          </FormControl.Label>
          <Input type="password" />

          <Link marginTop={2} _text={{fontSize: 'xs', fontWeight: '700', color: 'primary.600'}}>
            Forgot Password?
          </Link>

        </FormControl>
      </VStack>

      <VStack>
        <Button colorScheme="primary" marginTop={5} _text={{color: 'white'}}>
          Login
        </Button>

      </VStack>
      
    </Box>
  )
}
