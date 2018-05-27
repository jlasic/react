import React, { Component } from 'react';

class TextComponent extends Component {
    constructor(props){
        super(props);
        this.defaultColor = '000000';
        this.randomColor = '';
        this.state = {
            toggle: false
        };

        const self = this;
        fetch('http://www.colr.org/json/color/random')
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            self.randomColor = json.colors[0].hex;
            self.setState({
                toggle: true
            });
        });
    }
    render() {
      return (
        <p >
            {this.randomColor}
        </p>
      );
    }
  }
  
export default TextComponent;