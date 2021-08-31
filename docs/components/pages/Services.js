import React from "react";
import {ApisTable} from "./tables"

class Services extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <>
        <ApisTable />
      </>
    );
  }
}

export default Services;