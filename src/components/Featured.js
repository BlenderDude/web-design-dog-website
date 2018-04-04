import React, {Component} from 'react'
import s from "./Featured.css"

export default class Featured extends Component {
    render() {
        return (
            <div className={s.container}>
                <h1>Featured Dog</h1>
            </div>
        )
    }
}