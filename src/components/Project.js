import React, { Component } from 'react'

class Project extends Component {
    constructor() {
        super()
        this.state = {
            id,
            name,
            data
        }
    }

    handleAddTimestamp() { }

    handleEditProjectName(typedInData) { }

    handleDeleteTimestamp() { }

    render() {
        return (
            <div>
                <button>Edit</button>
                <p>{this.props.timestamp.name}</p>
                <button>Continue</button>
                <p>{this.props.timestamp.data}</p>
                <button>Delete</button>
            </div>
        )
    }

}
export default Project