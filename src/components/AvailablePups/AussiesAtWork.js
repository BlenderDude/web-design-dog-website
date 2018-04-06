import React, {Component} from 'react'

import s from './Pups.css'

import a1 from './img/a-1.jpg'
import a2 from './img/a-2.jpg'
import a3 from './img/a-3.jpg'
import a4 from './img/a-4.jpg'
import a5 from './img/a-5.jpg'
import a6 from './img/a-6.jpg'
import a7 from './img/a-7.jpg'
import a8 from './img/a-8.jpg'
import a9 from './img/a-9.jpg'
import a10 from './img/a-10.jpg'
import a11 from './img/a-11.jpg'
import a12 from './img/a-12.jpg'
import a13 from './img/a-13.jpg'
import a14 from './img/a-14.jpg'
import a15 from './img/a-15.jpg'
import a16 from './img/a-16.jpg'
import a17 from './img/a-17.jpg'
import a18 from './img/a-18.jpg'

class DogImage {
    constructor(photo, subtitle) {
        this.photo = photo
        this.subtitle = subtitle
    }
}

const photos = [
    new DogImage(a1, `Jedi knight "Ahmme" ...may the force be with you`),
    new DogImage(a2, `"Tassa" ready for chores`),
    new DogImage(a3, `"Charlie" ready to party`),
    new DogImage(a4, `"Boomer" playing "keep away"`),
    new DogImage(a5, `"Chaser," "Willow" and "Diesel" enjoying some summer fun`),
    new DogImage(a6, `"Gracie" helping to navigate`),
    new DogImage(a7, `"Sydney" babysitting her Yorkie sister`),
    new DogImage(a8, `"Willow" being a good big sister to Cheeno's puppies`),
    new DogImage(a9, `"Josie" keeping cool`),
    new DogImage(a10, `"Ivy" the soccer star`),
    new DogImage(a11, `"Rodeo" playing mattress to our grandson`),
    new DogImage(a12, `"Rock's" obedience graduation picture`),
    new DogImage(a13, `"Sully" I got it!!!`),
    new DogImage(a14, `"Max" working out on his treadmill`),
    new DogImage(a15, `"Chewbacca" with his best buddy`),
    new DogImage(a16, `"Odie" ready to do his laps!`),
    new DogImage(a17, `"Riley" fetch anyone?`),
    new DogImage(a18, `"Massey" (left) learning the ropes from her new friend (no relation).`),
]



export default class AussiesAtWork extends Component {
    render() {
        return (
            <div
                className={s.container}
            >
                <h1 className={s.header}>Aussies at Work</h1>

                <div className={[s.row].join(' ')}>

                    {photos.map((dogImage, i) =>
                        <Photo
                            key={i}
                            photo={dogImage.photo}
                            subtitle={dogImage.subtitle}
                        />
                    )}
                </div>
            </div>
        )
    }
}

const Photo = props =>
    <div className={[s.column, s.dogImage].join(' ')}>
        <div
            className={s.image}
            style={{
                backgroundImage: `url(${props.photo})`
            }}
        />
        <h4>{props.subtitle}</h4>
    </div>