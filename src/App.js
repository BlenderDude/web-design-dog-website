import React, {Component} from 'react'
import {Switch,Route} from 'react-router-dom'
import s from './App.css'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Home from "./components/Home/Home"
import Females from "./components/Dogs/Females"
import Males from "./components/Dogs/Males"
import PreviousPups from "./components/PreviousPups/PreviousPups"
import AvailablePups from "./components/AvailablePups/AvailablePups"

class App extends Component {
    render() {
        return (
            <div className={s.body}>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/females" component={Females}/>
                    <Route path="/males" component={Males}/>
                    <Route path="/previous-pups" component={PreviousPups}/>
                    <Route path="/available-pups" component={AvailablePups}/>
                </Switch>

                <Footer/>
            </div>
        )
    }
}

export default App
