import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
// import styled from "@emotion/styled";

const Login = () => {
  return (
      <Card maxW={"lg"} >
        <CardHeader>
          <Heading size="md">Login</Heading>
        </CardHeader>
        <CardBody>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder="Password" type="password" />
          </FormControl>
        </CardBody>
        <CardFooter display={"flex"} justifyContent={"flex-end"}>
          <Button colorScheme="blue">Submit</Button>
        </CardFooter>
      </Card>
  );
};

export default Login;


