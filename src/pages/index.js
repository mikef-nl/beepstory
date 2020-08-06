import React from "react"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "../theme";

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' }
];

export default () => (
  <ThemeProvider theme={theme}>
  <Container>
    <Header title="The Story of Beep" sections={sections} />
    <Grid item xs={12} md={8}></Grid>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Beep's Summer" />
          <CardContent>Testing</CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Beep's Winter" />
          <CardContent>Testing</CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card>
          <CardHeader title="Beep's Long Journey" />
          <CardContent>Testing</CardContent>
        </Card>
      </Grid>
    </Grid>
  </Container>
  </ThemeProvider>
)
