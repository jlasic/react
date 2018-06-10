import React, { Component } from 'react';

class TextComponent extends Component {
    constructor(props){
        super(props);
        this.defaultColor = '#ffffff';
        this.randomColor = '';
        this.state = {
            color: this.defaultColor,
            toggle: false
        };
        this.switchColor = this.switchColor.bind(this);

        fetch('http://www.colr.org/json/color/random')
        .then(response => response.json())
        .then(json => {
            this.randomColor = '#' + json.colors[0].hex;
            this.setState(prevState => ({
                color: prevState.toggle ? this.randomColor : this.defaultColor
            }));
        });
    }

    switchColor(){
        this.setState(prevState => ({
            color: !prevState.toggle ? this.randomColor : this.defaultColor,
            toggle: !prevState.toggle
        }));
    }

    render() {
      return (
        <p style={{color: this.state.color}} onClick={this.switchColor}>
            {this.props.text}
        </p>
      );
    }
  }
  
export default TextComponent;