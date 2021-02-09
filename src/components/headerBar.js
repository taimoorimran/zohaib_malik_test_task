import React, { Component } from "react";

class HeaderBar extends Component {
  render() {
    return (
      <div className="headerBar">
        <div className="userView">
          <span className="hide"></span>
        </div>
        <div className="searchbar">
          <div className="searchBox hide">
            <input placeholder="Search for projects here" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.8535 23.8535L8.15602 16.551C9.84009 18.0678 12.0605 19 14.5 19C19.7383 19 24 14.7383 24 9.50002C24 4.26173 19.7383 0 14.5 0C9.2617 0 4.99997 4.26173 4.99997 9.50002C4.99997 11.9395 5.93217 14.1599 7.44895 15.844L0.146484 23.1465C0.0488434 23.2441 0 23.3721 0 23.5C0 23.628 0.0488434 23.7559 0.146484 23.8536C0.341812 24.0488 0.658218 24.0488 0.8535 23.8535ZM6 9.50002C6 4.8135 9.813 1.00003 14.5 1.00003C19.187 1.00003 23 4.8135 23 9.50002C23 14.1865 19.187 18 14.5 18C9.81295 18 6 14.1865 6 9.50002Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
        <div className="mobileSearch hideNav">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.3535 24.3535L8.65602 17.051C10.3401 18.5678 12.5605 19.5 15 19.5C20.2383 19.5 24.5 15.2383 24.5 10C24.5 4.76173 20.2383 0.5 15 0.5C9.7617 0.5 5.49997 4.76173 5.49997 10C5.49997 12.4395 6.43217 14.6599 7.94895 16.344L0.646484 23.6465C0.548843 23.7441 0.5 23.8721 0.5 24C0.5 24.128 0.548843 24.2559 0.646484 24.3536C0.841812 24.5488 1.15822 24.5488 1.3535 24.3535ZM6.5 10C6.5 5.3135 10.313 1.50003 15 1.50003C19.687 1.50003 23.5 5.3135 23.5 10C23.5 14.6865 19.687 18.5 15 18.5C10.313 18.5 6.5 14.6865 6.5 10Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
