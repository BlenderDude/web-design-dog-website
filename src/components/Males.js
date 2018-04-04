import React, {Component} from 'react'
import s from './Dogs.css'

import belle from '../img/belle.jpg'

export default class Males extends Component {
    render() {
        return (
            <div className={s.container}>
                <h1 className={s.header}>Males</h1>

                <div className={[s.row,s.rowPadding].join(' ')}>
                    <div className={s.flex}>
                        <h1>Cuttingacres Rodeo at Koynes</h1>
                        <h3>Rodeo</h3>
                        <p>
                            Rodeo is residing with our daughter and her husband who live near us. He was whelped March 7, 2008, has 2 blue eyes and a strong pedigree with a lot of champions in it. Rodeo is a fun loving, goofy, friendly, make us laugh kind of dog. He can't just wag his tail, he has to wiggle his whole body! He is incredibly social and doesn't know a stranger. His sunny disposition and desire to please make him an absolute delight to be around. His hips are OFA'd "good" and he runs around 70 pounds. He is AKC registered and DNA'd. He is an MDR1 carrier which means he has one copy of the drug resistance gene.
                        </p>
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
                        <h1>Star Great Lakes Onix at Koynes</h1>
                        <h3>Onix</h3>
                        <p>
                            Onix is a red factored Black tri who lives with our daughter's family and was named Onix by our Pokemon loving grandsons (no Onix is not misspelled!). He was born 6/3/2016 and is a smaller boy running about 45 pounds. Onix is a fun loving, affectionate, friendly, intelligent, athletic boy who doesn't know a stranger. He is happy to spread his affection to anyone willing and quickly becomes a favorite to everyone he meets. He seldom lets our two grandsons out of his sight and doesn't hesitate to defend them if one gets too rough with them. He loves water and when at our house, makes frequent trips into the pond...no matter how cold! Onix is Normal/Normal for CEA, Clear for Degenerative Myelopathy, Clear for PRA-prcd, and Normal/Normal for MDR1.
                        </p>
                    </div>

                </div>

                <div className={[s.row,s.rowPadding].join(' ')}>
                    <div className={s.flex}>
                        <h1>Koynes Prince of River Wolves</h1>
                        <h3>Prince</h3>
                        <p>
                            Prince is the son of our foundation sire Shiloh and pretty little Belle and was born 12/06/09. He got the best of both of his parents as he is handsome and smart and he is also red factored. He is on the big side running around 80 pounds and is even tempered, smart, loving, athletic, loyal, great with kids, and except for his size, is the epitomy of what we have been trying to breed in our program. His hips have been OFA'd good, and he is AKC and ASCA registered and DNA'd. He is MDR1 Normal (does not carry the gene for drug resistance). Prince lives with one of our employees and their family, but is available upon request .
                        </p>
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