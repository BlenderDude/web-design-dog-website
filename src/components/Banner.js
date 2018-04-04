import React, {Component} from 'react'
import s from "./Banner.css"
import banner from "../img/banner.jpg"

export default class  extends Component {
    state = {
        scrollHidden: false,
    }

    constructor(props) {
        super(props)
        this.boundScrollController = this.scrollController.bind(this)
    }

    componentDidMount() {
        window.addEventListener("scroll", this.boundScrollController)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.boundScrollController)
    }

    scrollController(e) {
        this.title.style.transform = `translateY(${window.pageYOffset / 3}px)`
        this.setState({scrollHidden: window.pageYOffset > 30})
    }

    render() {
        return (
            <div
                className={s.container}
                style={{
                    // backgroundImage: `url(${banner})`,
                    backgroundImage: `url(https://static.domain.com.au/domainblog/uploads/2018/01/28000029/2_h0osln.jpg)`
                }}>
                <div className={s.title} ref={ref => this.title = ref}>
                    <h1>Koyne's Australian Shepherds</h1>
                </div>
                <div className={s.indicatorContainer}>
                    <div className={[s.scrollIndicator, this.state.scrollHidden ? s.hidden : ''].join(' ')}>
                        <div className={s.arrow}/>
                        Scroll for our story
                    </div>
                </div>
            </div>
        )
    }
}