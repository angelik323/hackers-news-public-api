import React, { useState } from "react"
import './assets/css/App.css'
import Header from './components/Header'

const initialData = {
  frameWork: ''
}

function App() {
  const [frameWorkValue, setFrameWork] = useState(initialData)

  let handleFrameWork = e => {
    setFrameWork({
      ...frameWorkValue,
      frameWork: e
    })
  }


  let html = (
    <div className='Front-End-Test---Home-view'>

      <Header></Header>

      <div className="rectangles">
        <div className="rectangle rectangleActive">
          <span className="All">All</span>
        </div>

        <div className="rectangle">
          <span className="My-faves">My faves</span>
        </div>
      </div>

      <div className="dropDownContainer">
        <div className="dropdownB">
          <button className="btn btn-secondary dropdown-toggle dropDown" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" aria-expanded="false">
            {(frameWorkValue.frameWork === '' ? 'Select your news': frameWorkValue.frameWork)}
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
            <li onClick={() => {handleFrameWork('Angular')}}>
              <button className="dropItem dropdown-item" href="hola">
                <span className='dropImg dropImgAngular'></span>
                 Angular
              </button>
            </li>
            <li onClick={() => {handleFrameWork('Reacts')}}>
              <button className="dropItem dropdown-item" href="hola">
                <span className='dropImg dropImgReact'></span>
                Reacts
              </button>
            </li>
            <li onClick={() => {handleFrameWork('Vuejs')}}>
              <button className="dropItem dropdown-item" href="hola">
                <span className='dropImg dropImgvue'></span>
                Vuejs
              </button>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )

  return html
}

export default App
