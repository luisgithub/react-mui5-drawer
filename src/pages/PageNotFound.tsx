import React from "react";
import { Page, Title } from "components";
import { Grid, Button } from "@mui/material";

export default function PageNotFound(props: any) {
  return (
    <Page className="PageNotFound">
      <Title>Error 404 - Pagina No Encontrada</Title>
      {props.location.pathname}

      <Grid container>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Regresar
        </Button>
      </Grid>
    </Page>
  );
}
