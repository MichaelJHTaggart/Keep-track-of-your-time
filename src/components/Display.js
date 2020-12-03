import React, { Component } from 'react';
import Timestamps from './Timestamps';
import axios from 'axios';

class Display extends Component {
    constructor() {
        super();
        this.state = {
            timestamps: [],
            stopwatch: []
        }
        this.addToTimestamp = this.addToTimestamp.bind(this)
        this.getOneTimestamp = this.getOneTimestamp.bind(this)
        this.editProjectName = this.editProjectName.bind(this)
        this.deleteTimestamp = this.deleteTimestamp.bind(this)
    }


    componentDidMount() {
        axios.get('/api/timestamps').then((res) => {
            this.setState({
                timestamps: res.data,
            })
        })
    }

    addTimestamp(name, data) {
        const body = { project: name, data }

        axios.post('/api/timestamps', body).then((res) => {
            this.setState({
                timestamps: res.data,
            })
        })
    }

    getOneTimestamp(name) {

    }
    editProjectName(name) {

    }
    deleteTimestamp(name) {

    }


    render() {
        return (
            <div>
                <Timestamps addTimestamp={this.addTimestamp} timestamp={this.state.timestamp} />
                {/* <Stopwatch /> */}
            </div>
        )
    }
}

export default Display