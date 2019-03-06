import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class Education extends Component {
  render() {
    return (
      <div>
        <h1>Education</h1>
      </div>
    );
  }
}

export default connect(null)(Education);
