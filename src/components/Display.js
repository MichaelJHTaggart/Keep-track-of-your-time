import React, { Component } from 'react';
import Timestamps from './Timestamps';
import axios from 'axios';

class Display extends Component {
    constructor() {
        super();
        this.state = {
            timestamps: [],
        }
    }


    componentDidMount() {
        axios.get('/api/timestamps').then((res) => {
            this.setState({
                timestamps: res.data,
            })
        })
    }

    // addToTimestamp(name, data) {
    //     axios.post('/api/timestamps').then((res))
    // }
    render() {
        return "hi"
    }
}

export default Display