import React from "react";
import { Div, Button, SideDrawer, Icon } from "atomize";

const SizeSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer
      isOpen={isOpen}
      onClose={onClose}
      w={{ xs: "100vw", sm: "20rem" }}
    >
      <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="danger900" />
      </Div>
      <Div d="flex" justify="flex-end">

      </Div>
    </SideDrawer>
  );
};

class Drawer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideDrawer: false
    };
  }

  render() {
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          h="2.5rem"
          w="2.5rem"
          bg="mainyellow100"
          hoverBg="maingray400"
          rounded="circle"
          shadow="2"
          hoverShadow="4"
          pos="fixed"
          top="0%"
          right="5rem"
          m={{ t: "0.25rem", r: "1rem" }}
          onClick={() =>
            this.setState({
              showSideDrawer: true,
            })
          }
        >
          <Icon name="Menu" size="20px" color="mainblack100" />
        </Button>
        <SizeSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default Drawer;