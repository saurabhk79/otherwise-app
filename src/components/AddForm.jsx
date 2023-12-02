import {
  FormControl,
  FormLabel,
  Button,
  Input,
  Heading,
  Divider,
} from "@chakra-ui/react";

const AddForm = () => {
  return (
    <form>
      <Heading as="h4" size="md">
        Add
      </Heading>
      <Divider />
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Amount</FormLabel>
        <Input placeholder="Tag Name" type="number" />
      </FormControl>
      <Button colorScheme="teal" variant="solid">
        Button
      </Button>
    </form>
  );
};

export default AddForm;

// Register form
{
  /* <FormControl isRequired>
<FormLabel>First name</FormLabel>
<Input placeholder="First name" />
</FormControl>

<FormControl isRequired>
<FormLabel>Email address</FormLabel>
<Input type="email" />
<FormHelperText>We will never share your email.</FormHelperText>
</FormControl>

<FormControl isRequired>
<FormLabel>Password</FormLabel>
<Input placeholder="Password" type="password" />
</FormControl> */
}
