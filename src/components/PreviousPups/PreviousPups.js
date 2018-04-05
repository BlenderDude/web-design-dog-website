import React, {Component} from 'react'
import s from './PreviousPups.css'

import img1 from './img/1.JPG'
import img2 from './img/2.JPG'
import img3 from './img/3.JPG'
import img4 from './img/4.JPG'
import img5 from './img/5.JPG'
import img6 from './img/6.JPG'
import img7 from './img/7.JPG'
import img8 from './img/8.JPG'
import img9 from './img/9.JPG'
import img10 from './img/10.JPG'
import img11 from './img/11.JPG'
import img12 from './img/12.JPG'
import img13 from './img/13.JPG'
import img14 from './img/14.JPG'
import img15 from './img/15.jpg'
import img16 from './img/16.jpg'
import img17 from './img/17.jpg'
import img18 from './img/18.jpg'
import img19 from './img/19.jpg'
import img20 from './img/20.jpg'
import img21 from './img/21.jpg'
import img22 from './img/22.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14,img15,img16,img17,img18,img19,img20,img21,img22]

export default class PreviousPups extends Component {
    render() {
        return (
            <div
                className={s.container}
            >
                <h1 className={s.header}>Previous Pups</h1>
                <div
                    className={s.images}
                >
                    {images.map(image =>
                        <div
                            className={s.image}
                            style={{
                                backgroundImage: `url(${image})`
                            }}
                        />
                    )}
                </div>
            </div>
        )
    }
}
