import React, { Component } from "react";

class ContentArea extends Component {
  render() {
    return (
      <div className="contentArea">
        <div className="contentText">
          <h6>Dashboard</h6>
          <h2>Hello, Derek Doyel !</h2>
          <p className="hide">
            Planning to have tiles installed at your place? <br />
            Get the best service for tile installation at your place in just few
            simple steps with The Hudson Valley.
          </p>
        </div>
        <div className="contentGallery">
          <div className="gallery">
            <img src="information.png" alt="information" />
            <span>My information</span>
          </div>
          <div className="gallery">
            <img src="new_project.png" alt="new_project" />
            <span>New project</span>
          </div>
          <div className="gallery">
            <img src="past_project.png" alt="past_project" />
            <span>Past Projects</span>
          </div>
          <div className="gallery">
            <img src="progress_project.png" alt="progress_project" />
            <span>Projects In Progress</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentArea;
