import React, { Component } from 'react';
import Timestamps from './Timestamps';
import Stopwatch from './Stopwatch'
import axios from 'axios';
import "../Display.css"

class Display extends Component {
    constructor() {
        super()
        this.state = {
            timestamps: []
        }
        this.getAllTimestamps = this.getAllTimestamps.bind(this)
        this.getOneTimestamp = this.getOneTimestamp.bind(this)
        this.editProjectName = this.editProjectName.bind(this)
        this.deleteTimestamp = this.deleteTimestamp.bind(this)
    }
    componentDidMount() {
        this.getAllTimestamps()
    }
    getAllTimestamps() {
        axios.get('/api/timestamps').then((res) => {
            this.setState({
                timestamps: res.data,
            })
        })
    }
    getOneTimestamp(name) {
        axios.get(`/api/timestamps/${name}`).then(res => {
            this.setState({
                timestamps: res.data,
            })
        })
    }
    editProjectName(oldName, newName) {
        axios.put(`/api/timestamps/${oldName}/${newName}`).then(res => {
            this.setState({
                timestamps: res.data,
            })
        })
    }
    deleteTimestamp(name) {
        axios.delete(`/api/timestamps/${name}`).then(res => {
            this.setState({
                timestamps: res.data,
            })
        })
    }
    render() {
        return (
            <div className="body">
                <Stopwatch
                    timestamps={this.state.timestamps}
                    addTimestamp={this.addTimestamp}
                    getAllTimestamps={this.getAllTimestamps}
                />
                <Timestamps
                    timestamps={this.state.timestamps}
                    deleteTimestamp={this.deleteTimestamp}
                    editProjectName={this.editProjectName}
                    getOneTimestamp={this.getOneTimestamp}
                />
            </div>
        )
    }
}
export default Display