import React from "react"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from '../components/Header';
import Card from '@material-ui/core/Card';
import { CardHeader, CardContent } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Img from 'gatsby-image';
import theme from "../theme";
import { graphql } from "gatsby";

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' }
];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function BeepStory({data}) {
  const classes = useStyles();
  return (
  <ThemeProvider theme={theme}>
  <Container>
    <Header title="The Story of Beep" sections={sections} />
    <div className={classes.heroContent}>
    <Grid item xs={12} md={8}>
      <Img fluid={data.file.childImageSharp.fluid} alt="logo"/>
    </Grid>
    </div>
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
};

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "main.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1240) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;