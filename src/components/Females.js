import React, {Component} from 'react'
import s from './Dogs.css'

import belle from '../img/belle.jpg'

export default class Females extends Component {
    render() {
        return (
            <div className={s.container}>
                <h1 className={s.header}>Females</h1>

                <div className={[s.row,s.rowPadding].join(' ')}>
                    <div className={s.flex}>
                        <h1>Koynes Belle of Great Oaks</h1>
                        <h3>Belle</h3>
                        <p>We recently lost Belle to a form of blood cancer. She is sorely missed as she was our quiet, shy, stubborn, loving, motherly dog who all the others looked up to for comfort and security. She loved puppies, no matter whose they were, and would lay quietly with them for long periods of time as a baby sitter. Until we are all together again, Belle, chase your balls and be happy!</p>
                    </div>
                    <div
                        className={[s.background].join(' ')}
                        style={{
                            backgroundImage: `url(${belle})`,
                            width: 300,
                            marginLeft: 50,
                        }}
                    />
                </div>

                <div className={[s.row,s.rowPadding].join(' ')}>
                    <div
                        className={[s.background].join(' ')}
                        style={{
                            backgroundImage: `url(${belle})`,
                            width: 300,
                            marginRight: 50,
                        }}
                    />

                    <div className={s.flex}>
                        <h1>Star's Jaded Princess of Koynes</h1>
                        <h3>Jade</h3>
                        <p>We recently lost Belle to a form of blood cancer. She is sorely missed as she was our quiet, shy, stubborn, loving, motherly dog who all the others looked up to for comfort and security. She loved puppies, no matter whose they were, and would lay quietly with them for long periods of time as a baby sitter. Until we are all together again, Belle, chase your balls and be happy!</p>
                    </div>

                </div>

                <div className={[s.row,s.rowPadding].join(' ')}>
                    <div className={s.flex}>
                        <h1>Thumb's Up Cool Breez at Koynes</h1>
                        <h3>Bree</h3>
                        <p>Bree's pedigree is stacked with champions on both sides and both of her parents have their Canine Good Citizen Certificate. She is incredibly smart and eager to please and has quite a goofy, fun loving, joy of life attitude. She is definately our comedienne! She runs around 55 pounds and is small boned. Bree was born 04/02/09, her hips have been OFA certified "good" and she is both AKC and ASCA registered and DNA'd. Bree is MDR1 normal (does not carry the drug resistance gene). Due to some health issues, Bree is now spayed and no longer used in breeding.</p>
                    </div>
                    <div
                        className={[s.background].join(' ')}
                        style={{
                            backgroundImage: `url(${belle})`,
                            width: 300,
                            marginLeft: 50,
                        }}
                    />
                </div>


            </div>
        )
    }
}