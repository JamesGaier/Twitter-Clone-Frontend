import React, { ReactElement, useState, Fragment } from 'react'

interface Props {
    type: string
    label: string
}

export default function Textfield(props: Props): ReactElement {
    const [value, setValue] = useState('');
    return (
        <Fragment>
            <div className="gr">
                <label className="form-label">{props.label}</label>
            </div>
            <input type="text" className="text-field" onChange={e => setValue(e.target.value)}  value={value} />
        </Fragment>
    )
}
