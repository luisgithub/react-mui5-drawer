import React from "react";
import { Grid } from "@mui/material";

export default function Buttons({
  children,
  align,
  ...rest
}: {
  children: any;
  align?: "start" | "end";
  [propName: string]: any;
}) {
  return (
    <Grid
      container
      spacing={1}
      style={{ marginTop: 8, marginBottom: 8 }}
      alignItems="flex-start"
      {...rest}
    >
      {align === "start" ? null : <Grid item xs={true}></Grid>}

      {Array.isArray(children) ? (
        children.map((child: any, i: any) => (
          <Grid item xs={false} key={child?.props?.key ?? i}>
            {child}
          </Grid>
        ))
      ) : (
        <Grid item xs={false}>
          {children}
        </Grid>
      )}

      {align !== "start" ? null : <Grid item xs={true}></Grid>}
    </Grid>
  );
}
