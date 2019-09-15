import React, { Component } from "react";
import { AddMessage } from "../layout";

export default class Home extends Component {
  state = { chatText: "" };

  /**
   * the onChange Method toget data from form element
   */
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    const { chatText } = this.state;
    return (
      // <div className="container">
      //   <div className="jumbotron">
      //     <h1 className="display-4">Send Message</h1>
      //     <br />
      //     <input id="name" className="form-control" placeholder="Name" />
      //     <br />
      //     <textarea
      //       id="message"
      //       className="form-control"
      //       placeholder="Your Message Here"
      //     />
      //     <br />
      //     <button id="send" className="btn btn-success" type="submit">
      //       send
      //     </button>
      //   </div>
      //   <div id="messages" />
      // </div>

      <AddMessage />
    );
  }
}
