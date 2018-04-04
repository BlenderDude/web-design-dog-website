import React, {Component} from 'react'
import s from "./Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div className={s.container}>
                <div className={s.copyright}>&copy; 2018 Tricia Koyne</div>
            </div>
        )
    }
}