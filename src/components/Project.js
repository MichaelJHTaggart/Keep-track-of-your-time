import React, { Component } from 'react'
import '../Project.css'

class Project extends Component {
    constructor() {
        super()

        this.state = {
            newName: "",
            editMode: false
        }
    }
    handleEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    handleEditSubmit = () => {
        this.props.editProjectName(this.props.timestamp.project, this.state.newName)
        this.setState({
            newName: "",
            editMode: false
        })
    }
    handleInput = (value) => {
        this.setState({
            newName: value
        })
    }

    render() {
        return (
            <div className="project">
                <div>
                    {
                        this.state.editMode
                            ? (
                                <>
                                    <input value={this.state.newName} onChange={(e) => this.handleInput(e.target.value)} />
                                    <button id="projectButton" onClick={() => this.handleEditSubmit()}>Submit</button>
                                </>
                            ) : (
                                <button onClick={() => this.handleEditMode()}>Edit</button>
                            )
                    }


                    <p>{this.props.timestamp.project}</p>
                </div>
                <div>
                    <h4>{this.props.timestamp.data}</h4>
                    <button id="projectButton" onClick={() => this.props.deleteTimestamp(this.props.timestamp.project)}>Delete</button>
                </div>
            </div>
        )
    }
}
export default Project