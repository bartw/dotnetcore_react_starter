import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { subject: "world" };
  }

  async componentDidMount() {
    const response = await fetch("/api/subject");
    const subject = await response.json();
    this.setState(() => ({ subject: subject.name }));
  }

  render() {
    return (
      <div className="container">
        <h1>Hello {this.state.subject}!</h1>
      </div>
    );
  }
}
