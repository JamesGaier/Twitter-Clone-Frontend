import React, { ReactElement } from 'react';

interface Props {
    size: string
}

export default function SearchIcon(props: Props): ReactElement {
    return (
        <div >
            <i className={`${props.size} fa fa-search gray`}></i>
        </div>
    )
}
