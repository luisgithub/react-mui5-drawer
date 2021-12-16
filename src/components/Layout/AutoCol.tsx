import React from "react";
import { Grid } from "@mui/material";

export default function AutoCol(props: any) {
  return (
    <Grid item xs>
      {props.children}
    </Grid>
  );
}
