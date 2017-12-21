import React, { Component } from "react";
import "./Main.css";
import "./Main.js";

class Main extends Component {
	state = {
		topic: "food",
		begindate: "20171201",
		enddate:"20171205",
		articles: [],
		savedarticles: [],
	};

	componentDidMount() {
    	console.log("component mounted from main.js");
  	}
  	

  render() {
    return (
      <div className="App">
       	{console.log(this.state)}
        <p>here we go</p>
      </div>
    );
  }
}

export default Main;