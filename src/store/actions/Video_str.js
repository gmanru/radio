import React, { Component } from 'react';
import { Input, Icon } from 'antd';
import ReactPlayer from "react-player";

class VideoStream extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      url: ""
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ url: this.state.inputValue })
  }

  render() {
    return (
      <div >
        <header>
          <div>
            <form onSubmit={this.handleSubmit}>
              <Input onChange={this.handleChange} style={{ width: "40%", margin: "20px" }} type="text" placeholder="Вставьте ссылку" />
              <button style={{ margin: "20px" }} ><Icon style={{ fontSize: '22px', color: "red" }} type="youtube" /></button>
            </form>

          </div>
          <ReactPlayer url={this.state.url} controls={true} />
        </header>
      </div>
    );
  }

}

export default VideoStream;