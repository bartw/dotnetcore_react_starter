import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: "world" };
  }

  componentDidMount() {
    this.setState(() => ({ subject: "starter" }));
  }

  render() {
    return (
      <div className="container">
        <h1>Hello {this.state.subject}!</h1>
      </div>
    );
  }
}
