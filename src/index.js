import _ from "lodash";
// import "./style.css";
// import Icon from "./kill.jpg";
import printMe from "./print.js";
function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  //   element.classList.add("hello");
  //   const myIcon = new Image();
  //   myIcon.src = Icon;

  //   element.appendChild(myIcon);

  btn.onclick = printMe;
  btn.innerHTML = "click this!!";
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
