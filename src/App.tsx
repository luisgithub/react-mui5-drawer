import React from "react";
import "./App.css";
import { GlobalStyles, styled } from "@mui/material";
import { Main } from './pages';
function App() {

  const Container = styled("div")({
    margin: 0,
    padding: "1rem",
  });

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <Main />
      <Container></Container>
    </>
  );
}

export default App;
