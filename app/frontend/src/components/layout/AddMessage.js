import React, { Component } from "react";
import { AppContext } from "../../ContextProvider";
import { createMessages } from "../../utils/Chatting";

const contextType = AppContext;

class AddMessage extends Component {
  // Component state
  state = {
    noteTitle: null,
    noteBody: null
  };

  /**
   * onChange Method
   */
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  /**
   * onSubmit Method
   */
  onSubmit = e => {
    const { context, state } = this;

    e.preventDefault();
    // create the notes
    const userId = context.state.userData.id;
    const noteData = {
      title: state.noteTitle,
      body: state.noteBody,
      author: userId
    };
    createMessages(noteData, context).then(res => {
      console.log("Create Notes Response ==> ", res);
      const { notes } = context.state;
      console.log("notes 2 ==> ", notes);
      notes.unshift(res);
      context.setNotes(notes);
    });
    e.target.reset();
  };

  render() {
    return (
      <div className="card  border-dark  mb-3 p-3">
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <label>Message: </label>
            <textarea
              className="form-control"
              id="noteBody"
              rows="3"
              onChange={e => this.onChange(e)}
            />
          </div>
          <br />

          <div className="d-flex flex-row-reverse">
            <button className="btn btn-success" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddMessage;
