import React, {Component} from 'react'

import f from "./Flex.css"

export function Row(props) {
    return (
        <div className={f.row}>
            {props.children}
        </div>
    )
}