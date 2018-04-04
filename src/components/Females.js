import React, {Component} from 'react'
import s from './Dogs.css'

import belle from '../img/belle.jpg'

export default class Females extends Component {
    render() {
        return (
            <div className={s.container}>
                <h1 className={s.header}>Females</h1>
                <div className={s.row}>
                    <div>
                        <h1>Belle</h1>
                        <p>We recently lost Belle to a form of blood cancer. She is sorely missed as she was our quiet, shy, stubborn, loving, motherly dog who all the others looked up to for comfort and security. She loved puppies, no matter whose they were, and would lay quietly with them for long periods of time as a baby sitter. Until we are all together again, Belle, chase your balls and be happy!</p>
                    </div>

                </div>
            </div>
        )
    }
}