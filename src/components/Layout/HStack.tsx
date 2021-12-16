import React from "react";
import { Grid } from "@mui/material";

type newSizes = "auto" | "1/2" | "1/3" | "2/3" | "1/4" | "3/4";
type colSizes =
  | undefined
  | newSizes
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | boolean;

type IRProps = {
  children: React.ReactNode;
  sp?: undefined | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  size?: colSizes[];
  m?: number;
  mt?: number;
  mb?: number;
  align?: "flex-start" | "center" | "flex-end" | "stretch" | "baseline";
  debug?: boolean;
  [propName: string]: any;
};

export default function R({
  children,
  sp,
  size,
  m = 0,
  mt = 0,
  mb = 0,
  align,
  debug,
  ...rest
}: IRProps) {
  size = size ?? [];

  const calcSize = (sz: any) => {
    switch (sz) {
      case "auto":
        return true;
      case "1/2":
        return 6;
      case "1/3":
        return 4;
      case "2/3":
        return 8;
      case "1/4":
        return 3;
      case "3/4":
        return 9;
      case 0:
        return false;
      case sz >= 1 && sz <= 12:
        return sz;
      default:
        return sz ?? true;
    }
  };

  return (
    <Grid
      container
      spacing={sp ?? 3}
      alignItems={align ?? "flex-start"}
      style={{ marginTop: 8 * m + 8 * mt, marginBottom: 8 * m + 8 * mb }}
      {...rest}
    >
      {React.Children.map(children, (c: any, i: any) => (
        <Grid item xs={calcSize(size?.[i])} key={c?.props?.key ?? i}>
          {debug &&
            `[index=${i}, size(${size?.[i]})=${calcSize(size?.[i])}, type:${
              c?.type?.name ?? c.type ?? "?"
            }]`}
          {c}
        </Grid>
      ))}
    </Grid>
  );
}
