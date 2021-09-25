import React from 'react';
import { Container, Row, Col, Div, Text } from 'atomize';
import Drawer from "../components/layouts/Drawer";
import Header from "../components/layouts/Header";
import { h } from 'gridjs';
import { Grid } from 'gridjs-react';
import { GiAbstract021 } from "react-icons/gi";
import { global } from '../_services/global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/Inbox'
import { ListItemText } from '@mui/material';


function Apis() {
  const [apis, setApis] = React.useState([]);
  let columns = [
    { id: 'name', name: 'name' },
    { id: 'base_url', name: 'URL' },
    { id: 'is_active', name: "Active ?" },
    { id: 'auth', name: 'Auth ?' },
    { id: 'created_at', name: 'created at' },
    { id: 'updated_at', name: 'updated at' },
    {
      name: 'name', formatter: (cell, row) => {
        return h('button', {
          className: 'py-2 mb-4 px-4 border rounded-md text-white bg-blue-600',
          onClick: () => alert(`Editing "${row.cells[0].data}" "${row.cells[1].data}"`)
        }, 'edit');
      }
    }
  ]
  React.useState(() => {
    global.getApis().then(res => {
      setApis(res.data);
    });
  })

  const listItem = apis.map((a) =>
    <ListItem>
      <ListItemButton>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={a.name} />
      </ListItemButton>
    </ListItem>
  );

  return (
    <>
      <Drawer />
      <Container>
        <Row><Col><Header /></Col></Row>
        <Row>
          <Col>
            <Div d="flex" flexDir="row" align="center" p={{ l: '5px' }} >
              <GiAbstract021 size={30} style={{ backgroundColor: '#FDD835', padding: '0.2rem', marginRight: '0.5rem' }} />
              <Text tag="h1" textSize="heading" >API's</Text>
            </Div>
          </Col>
        </Row>
        <Row>
          <Col>
            <List>
              {listItem}
            </List>
          </Col>
        </Row>
        <Row>
          <Col>
            <Grid columns={columns} data={apis} search={true} sort={true} pagination={{ enabled: true, limit: 10 }} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Apis;