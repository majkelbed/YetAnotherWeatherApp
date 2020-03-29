import React from "react";
import Nav from "@UI/Nav";
import { Container, createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: { padding: theme.spacing(3) },
    toolbar: {
      ...theme.mixins.toolbar
    }
  })
);
export default function Layout({ children }) {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <>
      <Nav>Test</Nav>
      <Container className={classes.main}>
        <div className={classes.toolbar} />
        {children}
      </Container>
    </>
  );
}
