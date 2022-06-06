import React, { useEffect, useState } from "react"
import '../assets/css/MyFaves.css'

import Clock from '../assets/img/clock.svg'
import HeartFull from '../assets/img/heartFull.svg'

const initialData = {
  infoFramework: [],
  listFrameworkHits: [],
  frameWork: 'angular',
  page: 0,
  listFaves: []
}

const MyFaves = () => {
  const [frameWorkValue, setFrameWork] = useState(initialData)
  const [infoFrameworkApi, setFrameworkList] = useState(initialData)
  const [infoPage, setInfoPage] = useState(initialData)

  const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ]
  
  useEffect(() => {
    executeQueryLocal()
    // eslint-disable-next-line
  },[])

  let executeQueryLocal = () => {
    let jsonParse = JSON.parse((localStorage.listFaves_1 === undefined ? '{}' : localStorage.listFaves_1))
    console.log(jsonParse)
    getFrameworkList(jsonParse)
  }

  let getFrameworkList = data => {
    setFrameworkList({
      ...infoFrameworkApi,
      infoFramework: data
    })
  }

  let handleFrameWork = e => {
    setFrameWork({
      ...frameWorkValue,
      frameWork: e,
    })
    setInfoPage({ ...infoPage,page: 0})
  }

  let html = (
    <>
      <div className="container">
        <div className="rectangles">
          <a href='/'>
            <div className="rectangle">
              <span className="All">All</span>
            </div>
          </a>

          <a href='/#/myFaves'>
            <div className="rectangle rectangleActive">
              <span className="My-faves">My faves</span>
            </div>
          </a>
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
              localStorage.listFaves_1 !== undefined ?
              infoFrameworkApi.infoFramework.map((itemFramework, index) => {
                let createAt = new Date(itemFramework.contentFave[3])
                let day = createAt.getUTCDate()
                let month =  monthNames[createAt.getUTCMonth()]
                let year = createAt.getUTCFullYear()
                let date = day + "th " + month + ", " + year

                return (
                  <div key={index} className="col col-12 col-md-6 p-3">
                    <div className="itemCard">
                      <a href={itemFramework.contentFave[2]} target="blank" className="content">
                        <div className="row1">
                          <img src={Clock} alt={Clock} className="clockIcon" />
                          <p className="textTime">{date} by {itemFramework.contentFave[0]}</p>
                        </div>
                        <div className="row2">
                          <p>{itemFramework.contentFave[1]}</p>
                        </div>
                      </a>
                      <div className="faveBtn">
                        <img src={HeartFull} alt={HeartFull} />
                      </div>
                    </div>
                  </div>
                )
              }) :
              <div className='w-100 ph-100 py-5'>
                <h3 className='center my-5'>No hay información disponible</h3>
              </div>
            }

          </div>
        </div>
      </div>
    </>
  )

  return html
}

export default MyFaves