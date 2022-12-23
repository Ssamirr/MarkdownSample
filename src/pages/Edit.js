import React from 'react'
import ReactMarkdown from 'https://esm.sh/react-markdown@7'

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