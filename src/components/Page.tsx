import React from "react";

import { Container, Paper } from "@mui/material";
import { Row, Col, Title } from ".";
import { useTheme } from "@mui/material/styles";

export default function Page(props: any) {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ paddingTop: theme.spacing(4), paddingBottom: theme.spacing(4) }}>
      <Row spacing={3}>
        <Col size={12}>
          <div style={{ margin: "20px 10px" }}>
            <Paper sx={{ padding: theme.spacing(2), margin: theme.spacing(2) }}>
              {props.title ? <Title>{props.title}</Title> : null}
              {props.children || "empty page"}
            </Paper>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
