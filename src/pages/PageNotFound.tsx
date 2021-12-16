import { Grid, Button } from "@mui/material";
import { Page, Title } from "../components";

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
