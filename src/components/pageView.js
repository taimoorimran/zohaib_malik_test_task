import React, { Component } from "react";
import ContentArea from "./contentArea";
import NavBar from "./navBar";
import HeaderBar from "./headerBar";
class PageView extends Component {
  render() {
    return (
      <div className="pageView">
        <HeaderBar />
        <div className="bodyBox">
          <NavBar />
          <ContentArea />
        </div>
      </div>
    );
  }
}

export default PageView;
