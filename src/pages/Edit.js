import React from 'react'

function Edit(props) {


    const getText = (event) => {
        props.setText(event.target.value)
    }

    return (
        <>
            <textarea value={props.text} onChange={getText} cols={100} rows={10}>
            </textarea>
        </>
    )
}

export default Edit