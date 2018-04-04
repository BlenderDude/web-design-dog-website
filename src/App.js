import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import s from './App.css'
import Header from "./components/Header"
import {Row} from "./components/Flex"
import Featured from "./components/Featured"

import Banner from "./components/Banner"
import Footer from "./components/Footer"

import Home from "./components/Home"
import Females from "./components/Females"

class App extends Component {
    render() {
        return (
            <div className={s.body}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/females" component={Females}/>
                </Switch>

                <Footer/>
            </div>
        )
    }
}

export default App
