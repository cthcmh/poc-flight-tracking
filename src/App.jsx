import {
    AppBar,
    Container,
    CssBaseline,
    Grid,
    Paper,
    Stack,
    ThemeProvider,
    Toolbar,
    Typography,
    createTheme,
    styled
} from "@mui/material";
import React from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6">Trip Support System</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container maxWidth="false">
            <Grid container spacing={0.3} paddingTop={1}>
              <Grid item xs={4} xl={4}>
                <Item>TripContainer</Item>
              </Grid>
              <Grid item xs={8} xl={8}>
                <Item>ServicesContainer</Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Stack direction="column" spacing={2}>
                    <Item>Item 1</Item>
                    <Item>Item 2</Item>
                    <Item>Item 3</Item>
                  </Stack>
                </Item>
              </Grid>
              <Grid item xs={8}>
                <Item>xs=8</Item>
              </Grid>
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
};

export default App;
