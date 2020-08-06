import React from "react"
import { Link } from "gatsby"
import Header from '../components/Header';
import { Container } from "@material-ui/core";

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' }
];

export default () => (
  <Container>
    <Header title="The Story of Beep" sections={sections} />
  </Container>
)
