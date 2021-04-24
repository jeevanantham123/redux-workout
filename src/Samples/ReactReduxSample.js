import React, { Component } from "react";
import { connect } from "react-redux";

class Sample extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <h3 className="text-black font-semibold">{this.props.message}</h3>
          <button
            className="bg-green-500 mt-10 shadow-xl px-6 md:px-14 py-2 md:py-4 rounded-lg font-bold focus:outline-none text-white tracking-wide"
            onClick={this.props.buttonClick}
          >
            Change
          </button>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    buttonClick: () =>
      dispatch({
        type: "Message_change",
        payLoad: "Welcome to the redux world!",
      }),
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(Sample);
