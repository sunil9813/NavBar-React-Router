import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"
import Skills from "./compoent/Skills"
import Contact from "./compoent/Contact"
import Services from "./compoent/Services"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//npm install react-router-dom@5

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' compoent={Home} exact>
            <Home />
          </Route>
          <Route path='/about' compoent={About} exact>
            <About />
          </Route>
          <Route path='/skills' compoent={Skills} exact>
            <Skills />
          </Route>
          <Route path='/contact' compoent={Contact} exact>
            <Contact />
          </Route>
          <Route path='/services' compoent={Services} exact>
            <Services />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
