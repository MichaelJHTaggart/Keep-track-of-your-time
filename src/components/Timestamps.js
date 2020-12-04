import React from 'react'
import Project from './Project'
import '../Timestamps.css'

const Timestamps = (props) => {

    const timestampsMap = props.timestamps.map((element, index) => {
        return (
            <Project
                key={props.index}
                timestamp={element}
                getOneTimestamp={props.getOneTimestamp}
                editProjectName={props.editProjectName}
                deleteTimestamp={props.deleteTimestamp}
            />
        )

    })

    return (
        <div className="timestamps-container">
            <h2 className="heading">Timestamps</h2>
            <div className="Timestamps">
                {timestampsMap}
            </div>
        </div>
    )
}
export default Timestamps