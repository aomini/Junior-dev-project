import React from 'react'

const index = (props) => {
    console.log(props);
    return (
        <div className="page-layout">
            {props.children}
        </div>
    )
}

export default index
