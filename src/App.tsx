import React from "react";
import ButtonAppBar from "./components/Navigation/ButtonAppBar";
import "./App.css";
import { GlobalStyles, styled } from "@mui/material";
import { SideBarDrawer } from "./components/Navigation/SideBarDrawer";

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const Container = styled("div")({
    margin: 0,
    padding: "1rem",
  });

  return (
    <>
      <GlobalStyles styles={{ body: { margin: 0, padding: 0 } }} />
      <ButtonAppBar onOpen={toggleDrawer} />
      <SideBarDrawer open={drawerOpen} onClose={toggleDrawer} />
      <Container></Container>
    </>
  );
}

export default App;
