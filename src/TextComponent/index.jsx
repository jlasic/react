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

        const self = this;
        fetch('http://www.colr.org/json/color/random')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            self.randomColor = '#' + json.colors[0].hex;
            self.setState(prevState => ({
                color: prevState.toggle ? self.randomColor : self.defaultColor
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