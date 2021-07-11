// import { useState, useEffect } from 'react'
import { MainComponent } from './components/Main'
import { Navigation } from './components/navigation'
import {SyllabusDetails} from './components/SyllabusDetails'
import SmoothScroll from 'smooth-scroll'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="/#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path={'/syllabus'}>
            <SyllabusDetails/>
          </Route>
          <Route path={`/`}>
            <MainComponent />
          </Route>
        </Switch>

      </div>
    </Router>

  )
}

export default App
