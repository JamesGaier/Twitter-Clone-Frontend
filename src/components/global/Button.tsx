import React, { ReactElement } from 'react'

interface Props {
    text: string,
    type: string
}

export default function Button(props: Props): ReactElement {
    return (
        <div className={props.type}>{ props.text }</div>
    )
}
