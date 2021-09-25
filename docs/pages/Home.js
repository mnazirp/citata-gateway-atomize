import React from "react";
import { Container, Row, Col, Text, Div } from "atomize";
import { GiCctvCamera } from "react-icons/gi";
import Header from "../components/layouts/Header"
import Drawer from "../components/layouts/Drawer"

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
          <Row flexDir={{ xs: 'column', lg: 'row' }}>
            <Col size={{ xs: 12, xl: 4 }}>
              <Div p="1rem" bg="warning500">
                This form
              </Div>
            </Col>
            <Col size={{ xs: 12, xl: 8 }}>
              <Div p="1rem" bg="warning500" >
                This table
              </Div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Home;
