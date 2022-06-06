import React  from "react"
import './assets/css/App.css'
import Header from './components/Header'

import { HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from './components/Home'

function App() {
  let html = (
    <div className='Front-End-Test---Home-view'>

      <Header></Header>

      <div className="container">
        <div className="rectangles">
          <div className="rectangle rectangleActive">
            <span className="All">All</span>
          </div>

          <div className="rectangle">
            <span className="My-faves">My faves</span>
          </div>
        </div>
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>

    </div>
  )

  return html
}

export default App
