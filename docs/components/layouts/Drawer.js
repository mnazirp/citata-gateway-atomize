// Sized Sidedrawer
import React from "react";
import { Div, Button, SideDrawer, Icon, Text } from "atomize";

const SizeSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", sm: "24rem" }}>
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
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() =>
            this.setState({
              showSideDrawer: true,
            })
          }
        >
          <Icon name="Draft" size="30px" color="white" />
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