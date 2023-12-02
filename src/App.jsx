import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";
import styled from "@emotion/styled";
import Register from "./components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<Home />} path="/" />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
};

const AppWrapper = styled.main`
  max-width: 720px;
  margin: auto;
  padding: 30px;
`;

export default App;
