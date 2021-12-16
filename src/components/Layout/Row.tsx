import React from "react";
import { Grid } from "@mui/material";

export default function Row({ children, spacing, ...rest }: any) {
  return (
    <Grid container spacing={spacing || 0} {...rest}>
      {children}
    </Grid>
  );
}
