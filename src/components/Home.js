import React, {Component} from 'react'
import ScrollParagraph from './ScrollParagraph'
import s from "./Home.css"

import puppy1 from '../img/puppy1.jpg'
import puppy2 from '../img/puppy2.jpg'
import puppy3 from '../img/puppy3.jpg'

import dog1 from "../img/dog1.jpg"
import Banner from "./Banner"

export default class Home extends Component {
    render() {
        return (
            <div className={s.container}>
                <h1 className={s.header}>Koyne's Australian Shepherds</h1>
                <div className={[s.row,s.rowPadding].join(' ')}>
                    <div
                        className={[s.background].join(' ')}
                        style={{
                            backgroundImage: `url(${puppy1})`,
                            width: 300,
                            marginRight: 50,
                        }}
                    />
                    <div
                        className={s.flex}
                    >
                        <h1>About Us</h1>
                        <p>
                            Breeding Australian Shepherds is a love, not an income and we believe in quality, not quantity. As such, we produce only 1 or 2 litters per year with the intent to breed beautiful, intelligent, non-agressive, Australian Shepherds. All of our dogs are our pets first and live in the house, sleep in our beds, and go where we do. Thus, we know and love our dogs and do not consider them a "business".
                        </p>
                    </div>
                </div>
                <div className={s.rowPadding}>
                    <h1 className={s.textCenter}>Choosing a Breeder</h1>
                    <p>
                        There are many Australian Shepherd breeders out there. Some breed for show and are looking for the physical "correctness" and beauty of the dog. Some breed for the herding ability of the Aussie as they need the working dog who can herd the cattle, protect the homestead and do whatever is needed.There are also some who breed without regard to what or why they are breeding and these breeders don't worry about the health or soundness of the dogs they mate. In selecting a puppy, we believe it is more important to look for a breeder with a strong sense of purpose and consideration for their dogs to avoid problems with your pet down the road.
                    </p>
                </div>
                <div className={[s.row,s.rowPadding].join(' ')}>
                    <div
                        className={s.flex}
                    >
                        <h1>Our Philosophy</h1>
                        <p>
                            Here in Central Ohio, there is not a lot of demand for a high "herding drive". Our dogs do not need to be able to run all day, or protect the herd from whatever may harm it. However, we here at Koynes believe that the intelligence, trainability and loyalty of the breed are closely related to its "herding drive" and thus, we are trying to reach a balance between the "look" that people want and the "drive" that makes them an Aussie. Our dogs (and puppies) tend to be lower energy than the hard working lines, but not so low that they will be content to sit at home and do nothing all the time!
                        </p>
                    </div>
                    <div
                        className={[s.background].join(' ')}
                        style={{
                            backgroundImage: `url(${puppy2})`,
                            width: 300,
                            marginLeft: 50,
                        }}
                    />
                </div>
                <div className={s.rowPadding}>
                    <h1 className={s.textCenter}>Is an Aussie Right for you?</h1>
                    <p>
                        Ask yourself what you want a dog to do for you and how much time you will have to give to it? If all you want is a companion to sit with you in the evening when you get home from work, it shouldn't be an Aussie as a low energy Aussie is not a low energy dog. Aussie's are very loyal and just want to be with you, no matter what you are doing, so you should plan on giving your dog/puppy lots of your time. Combine their energy with a big brain, and you will have to be on your toes to stay ahead of your Aussie! Intelligent dogs need an outlet for their intelligence as well as their energy. If your life is hectic and no one is home much, you might not want an Aussie! If they get bored, they will find things to amuse themselves and you might not like what they find! On the other hand, if you want a companion in what ever you do, this might be the dog for you. Aussie's want a "job" whether that be keeping you company while you jog or run errands, watching the children, working livestock, or running agility. No job is too small! Challenge them and you will be rewarded! Ignore them and no one will be happy! An Aussie who is well socialized as a puppy and then given some basic obedience training as they grow, should become a go anywhere, do anything dog.
                    </p>
                </div>
                <div className={s.rowPadding}>
                    <div className={[s.flex,s.background].join(' ')}
                         style={{
                             backgroundImage: `url(${puppy3})`,
                             height: 400,
                         }}
                    />
                </div>
                <div className={s.rowPadding}>
                    <h1 className={s.textCenter}>Our Puppies</h1>
                    <p>
                        Puppies get a huge amount of our attention from the moment they are born. We cuddle them, talk to them, and teach them that a human's touch is a wonderful thing. They too get to go places with us, so that strangers and strange places are not likely to make them react out of fear. We also expose them to cats and other dogs in an effort to make them more social. We believe that all of this will produce a well adjusted, loving, and devoted companion for whomever they find as their forever home.
                    </p>
                    <p>
                        We try to let our puppies "choose" their person and if you ever have the good fortune to be "chosen" by an Aussie, you will understand what we mean! It is a very strong bond that lasts for life! Because of this, we prefer not to sell our puppies sight unseen and will not sell a puppy based only on their color, gender or color of eyes. We also reserve the right not to sell you a puppy if we (or the puppy) feel that it would not be a good match. The wrong combination of their personality with your lifestyle will be bad for you and your puppy! When we ask you questions, your honest answers will help make sure that the puppy you get, is the best fit possible!!
                    </p>
                </div>
            </div>
        )
    }
}