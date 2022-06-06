import React, { useEffect, useState } from "react"
import './assets/css/App.css'
import Header from './components/Header'

import Clock from './assets/img/clock.svg'
import HeartFull from './assets/img/heartFull.svg'

const initialData = {
  infoFramework: [],
  listFrameworkHits: [],
  frameWork: ''
}

function App() {
  const [frameWorkValue, setFrameWork] = useState(initialData)
  const [infoFrameworkApi, setFrameworkList] = useState(initialData)
  
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ]

  useEffect(() => {
    executeQuery('')
    // eslint-disable-next-line
  },[])

  let executeQuery = e => {
    let api = 'https://hn.algolia.com/api/v1/search_by_date?query='+e+'&page=0'
    fetch(api, {method: "GET"})
    .then(data  => data.json())
    .then(json => {
      getFrameworkList(json)
      console.clear()
      console.log(json)
    })
  }

  let getFrameworkList = data => {
    setFrameworkList({
      ...infoFrameworkApi,
      infoFramework: data,
      listFrameworkHits: data.hits
    })
  }

  let handleFrameWork = e => {
    setFrameWork({
      ...frameWorkValue,
      frameWork: e
    }, executeQuery(e))
  }


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

      <div className="dropDownContainer">
        <div className="container">
          <div className="dropdownB">

            <button className="btn btn-secondary dropdown-toggle dropDown" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" aria-expanded="false">
              {(frameWorkValue.frameWork === '' ? 'Select your news': frameWorkValue.frameWork)}
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
              <li onClick={() => {handleFrameWork('angular')}}>
                <button className="dropItem dropdown-item" href="hola">
                  <span className='dropImg dropImgAngular'></span>
                  Angular
                </button>
              </li>

              <li onClick={() => {handleFrameWork('reactjs')}}>
                <button className="dropItem dropdown-item" href="hola">
                  <span className='dropImg dropImgReact'></span>
                  Reactjs
                </button>
              </li>

              <li onClick={() => {handleFrameWork('vuejs')}}>
                <button className="dropItem dropdown-item" href="hola">
                  <span className='dropImg dropImgvue'></span>
                  Vuejs
                </button>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <div className="contentDynamic">
        <div className="container">
          <div className="row">

            {
              infoFrameworkApi.listFrameworkHits.map((itemFramework, index) => {
                let createAt = new Date(itemFramework.created_at)
                let day = createAt.getUTCDate()
                let month =  monthNames[createAt.getUTCMonth()]
                let year = createAt.getUTCFullYear()
                let date = day + "th " + month + ", " + year

                return(
                  <div key={index} className="col col-12 col-md-6 p-3">
                    <div className="itemCard">
                      <a href={itemFramework.story_url} target="blank" className="content">
                        <div className="row1">
                          <img src={Clock} alt={Clock} className="clockIcon" />
                          <p className="textTime">{date} by {itemFramework.author}</p>
                        </div>
                        <div className="row2">
                          <p>{itemFramework.story_title}</p>
                        </div>
                      </a>
                      <div className="faveBtn">
                        <img src={HeartFull} alt={HeartFull} />
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>

      <div className="pagination">
        <div className="container">
          <div className="rowsPagination">
            <div className="btnPageItem"><span>&lt;</span></div>
            <div className="btnPageItem btnPageActive"><span>1</span></div>
            <div className="btnPageItem"><span>2</span></div>
            <div className="btnPageItem"><span>3</span></div>
            <div className="btnPageItem"><span>4</span></div>
            <div className="btnPageItem"><span>5</span></div>
            <div className="btnPageItem"><span>6</span></div>
            <div className="btnPageItem"><span>7</span></div>
            <div className="btnPageItem"><span>8</span></div>
            <div className="btnPageItem"><span>9</span></div>
            <div className="btnPageItem"><span>&gt;</span></div>
          </div>
        </div>
      </div>

    </div>
  )

  return html
}

export default App
