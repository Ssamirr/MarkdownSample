import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

function Preview(props) {
    return (
        <>
            <ReactMarkdown children={props.text} />
        </>
    )
}

export default Preview