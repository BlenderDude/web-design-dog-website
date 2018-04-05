import React, {Component} from 'react'
import s from './AvailablePups.css'

import jade from './img/jade.jpg'
import onix from './img/onix.jpg'

export default class AvailablePups extends Component {
    render() {
        return (
            <div
                className={s.container}
            >
                <h1 className={s.header}>Available Pups</h1>
                <h3 className={s.subHeader}>As of right now we do not have any puppies available</h3>

                <div className={[s.row,s.center].join(' ')}>
                    <div className={s.column}>
                        <div
                            className={s.image}
                            style={{
                                backgroundImage: `url(${jade})`
                            }}
                        />
                    </div>
                    <div className={s.column}>
                        <div
                            className={s.image}
                            style={{
                                backgroundImage: `url(${onix})`
                            }}
                        />
                    </div>
                </div>

                <h3 className={[s.subHeader,s.alert].join(' ')}>Jade has been bred to Onix and is due the end of April</h3>
                <p>
                    Star's Jaded Princess of Koynes (Jade) and Star Great Lakes Onix at Koynes (Onix) are expecting a litter the end of April. A deposit of $200 will hold your position in the pick order and is 100% refundable until puppies are 6 weeks old, vet checked and determined to be healthy. Puppies will be ready to go home the end of June.
                </p>
            </div>
        )
    }
}
