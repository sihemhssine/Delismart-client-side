import React from "react"; 
import { connect } from "react-redux";
import ReactLoading from 'react-loading';
import axios from "axios";
import './Converter.css';

class BestSeller extends React.Component{  constructor() {
    super();
    this.initialText = "Lorem ipsum dolor sit amet";
    this.state = {
      text: this.initialText,
      inputValue: ""
    };
  }
  changeInput = (e) => {
    let value = e.target.value;
    let txt = document.getElementById("myText").innerText;
    let idx = txt.indexOf(value);
    if(idx >= 0) {
      let newText = [txt.substring(0, idx), <span style = {{color: "red"}}>{txt.substring(idx, idx + value.length)}</span>, txt.substring(idx + value.length)];
      this.setState({inputValue: value, text: newText});
    } else {
      this.setState({inputValue: value, text: this.initialText});
    }    
  }
  render() {
    return (
      <div>
        <p id="myText">{this.state.text}</p>
        <input onChange={this.changeInput} value={this.state.inputValue} />
      </div>
    );
  }
}

 

export default BestSeller ; 