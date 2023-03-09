import React from "react"
import "./style.css"

const FileContainer = (props) => {
    return (
        <div >
            <span > {props.name}</span>
            <span onClick={() => props.handleRemove(props.name)} className="borders">&#10060;</span>
        </div>

    )
}

export default FileContainer;