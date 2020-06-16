import React  from 'react'
// import Nanobar from 'nanobar'
import "nanobar/nanobar.js";
import Nanobar from "nanobar/nanobar.js";
import nanobar from "nanobar/nanobar.js";
import './Nanobar.css'
import { render } from '@testing-library/react';


class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

  }
  
  componentDidMount(){
    const nanobar = new Nanobar();
    nanobar.go(this.props.percentage)
  }

  componentDidUpdate(){
    const nanobar = new Nanobar();
    nanobar.go(this.props.percentage)
  }

  render(){
    return(
      <div className={nanobar} id={nanobar}></div>
    )
  }
}


class DemoWithProgressBar extends React.Component {
  state = {
    percentage: 0
  };

  render() {
    console.log(this.state.percentage);
    return (
      <div>
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage - 10 }))}>
          Dec
        </button>
        <ProgressBar percentage={this.state.percentage} />
        <button
          onClick={() => this.setState(({ percentage }) => ({ percentage: percentage + 10 }))}>
          Inc
        </button>
        
      </div >
    );
  }
}

export default DemoWithProgressBar;
