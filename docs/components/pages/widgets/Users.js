import React from "react";
import { Row, Col, Container } from "atomize";


class Drawer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container
          bg="maingray400"
          d="flex"
          align="center"
          p="1rem"
          rounded="sm"
        >
          <Row>
            <Col>Row 1 Col 1</Col>
          </Row>
          <Row>
            <Col>Row 2 Col 2</Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Drawer;