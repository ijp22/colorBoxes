import React, { Component } from 'react';
import './BoxContainer.css';
import Box from './Box';

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'magenta', 'violet', 'pink', 'steelblue', 'gray', 'teal']
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(() => (
            <Box colors={this.props.allColors}/>
        ));
        return <div className="BoxContainer">{boxes}</div>
    }
}

export default BoxContainer;