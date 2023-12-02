import { Heading } from "@chakra-ui/react";
import CardBox from "./components/CardBox";
import Visualization from "./components/VIsualizations";
import History from "./components/History";
import AddForm from "./components/AddForm";

const Home = () => {
  return (
    <>
      <Heading textAlign={"center"}>
        Personal Expense tracker
      </Heading>
      <CardBox />
      <Visualization />
      <History />
      <AddForm />
    </>
  );
};

export default Home;


