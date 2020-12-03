import React, { Component } from 'react'

const Timestamps = (props) => {
    const timestampsMap = props.timestamps.map((element) => {
        return (
            <Project addTimestamp={props.addTimestamp} key={element.name} timestamp={element} />
        )
    })

    return <div className="timestamps">{timestampsMap}</div>
}
export default Timestamps