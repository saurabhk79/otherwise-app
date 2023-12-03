import {
    Card,
    // CardHeader,
    Stack,
    CardBody,
    // CardFooter,
  } from "@chakra-ui/react";
  
  const Visualization = () => {
    return (
      <Stack direction={"row"}>
        <Card maxW='sm' marginTop={8}>
        <CardBody>
          Pie-Chart
        </CardBody>
      </Card>
      <Card maxW='sm' marginTop={8}>
        <CardBody>
         Others
        </CardBody>
      </Card>
      </Stack>
    );
  };
  
  export default Visualization;
  