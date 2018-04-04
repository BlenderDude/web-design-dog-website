import React, {Component} from 'react'
import s from "./ScrollParagraph.css"

export default class ScrollParagraph extends Component {
    state = {
        hidden: false,
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
        this.setState({hidden: !(window.pageYOffset + window.innerHeight > this.getCoords(this.container).top + 300)})
    }

    getCoords(elem) {
        const box = elem.getBoundingClientRect()

        const body = document.body
        const docEl = document.documentElement

        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
        const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

        const clientTop = docEl.clientTop || body.clientTop || 0
        const clientLeft = docEl.clientLeft || body.clientLeft || 0

        const top = box.top + scrollTop - clientTop
        const left = box.left + scrollLeft - clientLeft

        return {top: Math.round(top), left: Math.round(left)}
    }

    render() {
        const {starter, story} = this.props
        return (
            <div className={[s.paragraph, this.state.hidden ? s.hidden : ''].join(' ')}
                 ref={ref => this.container = ref}>
                <div className={s.text}>
                    <span>
                        <span className={s.starter}>{starter}</span>
                        &nbsp;{story}
                    </span>
                </div>
            </div>
        )
    }
}