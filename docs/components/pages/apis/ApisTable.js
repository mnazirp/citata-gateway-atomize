import React from "react";
import { Row, Col, Container, Text, Input, Button, Icon } from "atomize";
import { Grid } from "gridjs-react"
import {h} from "gridjs"
import { VscCircuitBoard } from "react-icons/vsc";


class ApisTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Container shadow="1" rounded="md" p="1rem">
          <Row>
            <Col>
              <Text tag="h1" textSize="subheader" m={{ b: "1rem" }}><VscCircuitBoard size={20}  color="#E91E63" /> Api's </Text>
              <Grid
                data={[
                  ['John', 'john@example.com', '(353) 01 222 3333', null],
                  ['Mark', 'mark@gmail.com', '(01) 22 888 4444', null]
                ]}
                columns={['Name', 'Email', 'Phone Number', 
                { 
                  name: 'Actions',
                  formatter: (cell, row) => {
                    return h('button', {
                      onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
                    }, 'Edit');
                  }
                },
                ]}
                search={true}
                pagination={{
                  enabled: true,
                  limit: 1,
                }}
              />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default ApisTable;