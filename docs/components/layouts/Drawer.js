import React from "react";
import { connect } from "react-redux";
import { Div, Button, SideDrawer, Icon, Anchor, Text } from "atomize";
import { IoIosShuffle, IoIosGitNetwork, IoIosBarcode, IoIosSwitch, IoMdKey } from "react-icons/io";
import { SiPostman } from "react-icons/si"

const menuMember = [
  { title: 'Home', link: '/', icon: () => (<IoIosBarcode size={20} />) },
  { title: 'Api\'s', link: '/apis', icon: () => (<IoIosGitNetwork size={20} />) },
  { title: 'Services', link: '/modules', icon: () => (<IoIosSwitch size={20} />) },
  { title: 'Postman', link: '/postman', icon: () => (<SiPostman size={20} />) },
]

const menuAdmin = [
  { title: 'Home', link: '/', icon: () => (<IoIosBarcode size={20} />) },
  { title: 'Members', link: '/apis', icon: () => (<IoIosGitNetwork size={20} />) },
]

const SizeSideDrawer = ({ isOpen, onClose, menu }) => {
  return (
    <>
      <SideDrawer
        isOpen={isOpen}
        onClose={onClose}
        w={{ xs: "100vw", sm: "20rem" }}
      >
        <Text tag="h2" textSize="title" m={{ b: "1rem" }}
          d="flex"
          align="center">
          <IoIosShuffle size="30" />
          Navigation
        </Text>
        {menu.map((item, index) => (
          <Anchor href={item.link} key={index}>
            <Div
              p={{ x: "1rem", y: "0.75rem" }}
              border={{ b: index !== 4 && "1px solid" }}
              borderColor="gray400"
              d="flex"
              align="center"
              textColor={{ xs: 'medium', md: 'black' }}
              hoverTextColor="danger700"

            >
              <Div d="flex" align="center" m={{ r: '0.5rem' }}>{item.icon()}</Div>
              {item.title}
            </Div>
          </Anchor>
        ))}
      </SideDrawer>
    </>
  );
};

class Drawer extends React.Component {
  isAdmin = false;
  constructor(props) {
    super(props);
    if (props.auth.user.user.role === 'ADMIN') this.isAdmin = true;
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
          menu = {(this.isAdmin)? menuAdmin : menuMember}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => (state);
export default connect(mapStateToProps)(Drawer);