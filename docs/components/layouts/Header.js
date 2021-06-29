import React from "react";
import { Container, Row, Col, Div, Text } from "atomize";
import { FcBiotech } from "react-icons/fc";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container m={{ b: "2rem" }}>
          <Row m={{ t: "0.25rem" }}>
            <Col size="12">
              <Div
                d="flex"
                flexDir="row"
                justify="center"
              >
                <FcBiotech size={50} color="#382683" />
                <Text
                  textSize="display1"
                  textColor="black900"
                  textWeight="500">
                  Citata <span style={{ color: '#e91e63' }}>Api's</span> Bridge
                </Text>
              </Div>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default Header;
