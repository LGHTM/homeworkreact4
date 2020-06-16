import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DemoWithProgressBar from "./Nanobar";
import Albumlist from "./AlbumList";

class FallbackWrapper extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isError: false
    }
  }


  componentDidCatch(error, info){
    console.log(error, info.componentStack)
    this.setState({
      isError: true
    })
  };

  render(){
    return this.state.isError ? this.props.errorMessage : this.props.children;
  }
}

class Error extends React.Component {
render(){return undefined.call()}
}

ReactDOM.render(
  <div>
    <DemoWithProgressBar />
    
    <FallbackWrapper key={'1'} errorMessage="Unexpected error">
      <Error/>
    </FallbackWrapper>
    <FallbackWrapper key={'2'} errorMessage="Unexpected error">
      <h1>Some header</h1>
    </FallbackWrapper>

    <Albumlist />
  </div>,
  document.getElementById("root")
);
