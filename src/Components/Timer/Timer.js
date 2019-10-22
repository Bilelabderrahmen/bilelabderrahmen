import React, { Component } from "react";
import Timer from "../Stopwatch";

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeMs: 0
    };
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
  }
  start = () => {
    if (this.state.interval) {
      return;
    }
    const interval = setInterval(() => {
      this.setState({
        timeMs: this.state.timeMs + 1000
      });
    }, 1000);
    this.setState({
      interval: interval
    });
  };

  pause = () => {
    if (!this.state.interval) {
      return;
    }
    clearInterval(this.state.interval);
    this.setState({
      interval: undefined
    });
  };

  reset = () => {
    this.state.timeMs = 0;
    if (!this.state.interval) {
      return;
    }
    clearInterval(this.state.interval);
    this.setState({
      interval: undefined
    });
  };

  render() {
    return (
      <div>
        <div>
          <Timer ms={this.state.timeMs} />{" "}
        </div>

        <input type="button" value="Start" onClick={this.start} />
        <input type="button" value="Pause" onClick={this.pause} />
        <input type="button" value="Reset" onClick={this.reset} />
      </div>
    );
  }
}

export default StopWatch;
