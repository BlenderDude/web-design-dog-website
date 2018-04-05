import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import s from "./Header.css"

const links = [
    {
        title: "Home",
        to: "/",
    },
    {
        title: "Females",
        to: "/females",
    },
    {
        title: "Males",
        to: "/males",
    },
    {
        title: "Previous Pups",
        to: "/previous-pups",
    },
    {
        title: "Available Pups",
        to: "/available-pups",
    },
    {
        title: "Aussies at Work",
        to: "/aussies-at-work",
    },
    {
        title: "Guarantee",
        to: "/guarantee",
    },
    {
        title: "Links",
        to: "/links",
    }
]

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className={s.header}>
                    <div style={{flex: 1}}>
                        <span className={s.logo}>Koyne's Australian Shepherds</span>
                    </div>
                    <div className={s.menuLinks}>
                        {links.map((link, i) =>
                            <Link
                                className={s.link}
                                key={i}
                                to={link.to}
                            >
                                <div>{link.title}</div>
                                <div className={s.linkBar}/>
                            </Link>
                        )}

                    </div>
                </header>
            </div>
        )
    }
}