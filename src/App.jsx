import React  from "react"

import './assets/css/App.css'
import Header from './components/Header'

import { HashRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Home from './components/Home'
import MyFaves from "./components/MyFaves"

const App = () => {
  let html = (
    <div className='Front-End-Test---Home-view'>

      <Header></Header>

      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/myFaves" element={<MyFaves></MyFaves>}></Route>
        </Routes>
      </Router>

    </div>
  )

  return html
}

export default App
