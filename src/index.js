import React from "react";
import ReactDOM from "react-dom";

//var today = new Date();

const customStyle = {
  color: "red"
};

var today = new Date(2021, 9, 29, 19, 0, 0);
var time = today.getHours();
var greeting = "";

if (time < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if ((time) => 12 && time < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
