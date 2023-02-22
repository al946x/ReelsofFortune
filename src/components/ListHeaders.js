import React from "react";

function ListHeaders(props) {
    return (
        <div className="col-1">
            <h2>{props.headers}</h2>
        </div>
    )
}

export default ListHeaders;