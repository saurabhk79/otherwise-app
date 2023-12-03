import {
  Card,
  CardHeader,
  CardBody,
  // CardFooter,
  Heading,
} from "@chakra-ui/react";

const CardBox = () => {
  return (
    <Card maxW='sm' marginTop={8}>
      <CardHeader>
        <Heading as="h3" size="lg">
          $44.0
        </Heading>
      </CardHeader>
      <CardBody>
        View a summary of all your customers over the last month.
      </CardBody>
    </Card>
  );
};

export default CardBox;
