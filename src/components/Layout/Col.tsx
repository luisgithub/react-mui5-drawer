import React from "react";
import { Grid } from "@mui/material";

export default function Col(props: any) {
  return (
    <Grid item xs={props.size ?? 12} md={props.size ?? 4} lg={props.size ?? 3}>
      {props.children}
    </Grid>
  );
}
