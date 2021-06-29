import React from "react";
import { Container, Row, Col, Text } from "atomize";
import { GiCctvCamera } from "react-icons/gi";
import Header from "../layouts/Header"
import Drawer from "../layouts/Drawer"
import { ApisTable } from "../pages/apis"
import { Users } from "./widgets"

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Drawer />
        <Container>
          <Row><Col><Header /></Col></Row>
          <Row>
            <Col
              d="flex"
              flexDir="row"
            >
              <GiCctvCamera size={30} color="#212121" style={{ backgroundColor: '#FDD835' }} />
              <Text tag="h1" textSize="heading" m={{ b: "1rem", l: "0.2rem" }}>Monitoring</Text>
            </Col>
          </Row>
          <Row>
            <Col size={12}><ApisTable /></Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home;
