import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./components/Main";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import UserProfile from "./components/UserProfile";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: "home",
    };
    this.changeState = this.changeState.bind(this);
  }

  changeState(page) {
    this.setState({
      currentPage: page,
    });
  }

  render() {
    if (this.state.currentPage === "index") {
      return (
        <React.StrictMode>
          <UserProfile changeState={this.changeState} />
        </React.StrictMode>
      );
    } else if (this.state.currentPage === "home") {
      return (
        <React.StrictMode>
          <Main changeState={this.changeState} />
        </React.StrictMode>
      );
    } else if (this.state.currentPage === "about") {
      return (
        <React.StrictMode>
          <About changeState={this.changeState} />
        </React.StrictMode>
      );
    } else if (this.state.currentPage === "contact") {
      return (
        <React.StrictMode>
          <Contact changeState={this.changeState} />
        </React.StrictMode>
      );
    } else if (this.state.currentPage === "statistics") {
      return (
        <React.StrictMode>
          <Statistics changeState={this.changeState} />
        </React.StrictMode>
      );
    } else if (this.state.currentPage === "projects") {
      return (
        <React.StrictMode>
          <Projects changeState={this.changeState} />
        </React.StrictMode>
      );
    } else {
      return <h1>Index</h1>;
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
