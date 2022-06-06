import React, { useEffect, useState } from "react"
import '../assets/css/Home.css'

import Clock from '../assets/img/clock.svg'
import HeartEmpty from '../assets/img/heartEmpty.svg'
// eslint-disable-next-line
import HeartFull from '../assets/img/heartFull.svg'

const initialData = {
  infoFramework: [],
  listFrameworkHits: [],
  frameWork: 'angular',
  page: 0,
  listFaves: []
}

let listaFaves = []

const Home = () => {
  const [frameWorkValue, setFrameWork] = useState(initialData)
  const [infoFrameworkApi, setFrameworkList] = useState(initialData)
  const [infoPage, setInfoPage] = useState(initialData)
  const [arrFaves, setArrFaves] = useState(initialData)

  const monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
  ]

 
  useEffect(() => {
    executeQuery('angular', 0)
    // eslint-disable-next-line
  },[])

  let executeQuery = (query = 'angular', page = 0) => {
    let api = 'https://hn.algolia.com/api/v1/search_by_date?query='+query+'&page='+page
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
      frameWork: e,
    }, executeQuery(e, 0))
    setInfoPage({ ...infoPage,page: 0})
  }

  let handlePage = e => {
    setInfoPage({
      ...infoPage,
      page: e
    }, executeQuery(frameWorkValue.frameWork, e))
  }

  let addIdLocalStorage = jsonFave => {
    listaFaves.push(jsonFave)
    setArrFaves({
      ...arrFaves,
      listFaves: listaFaves
    })
    localStorage.listFaves_1 = JSON.stringify(arrFaves.listFaves)
  }

  let html = (
    <>
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
                      <div className="faveBtn" onClick={() => addIdLocalStorage({
                          idFave: [frameWorkValue.frameWork, infoPage.page, itemFramework.objectID],
                          contentFave: [itemFramework.author, itemFramework.story_title, itemFramework.story_url, itemFramework.created_at]
                        }
                      )}>
                        <img src={HeartEmpty} alt={HeartEmpty} />
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
            <div className="btnPageItem" onClick={() => { (infoPage.page === 0 ? handlePage(0) : handlePage(infoPage.page - 1)) }}><span>&lt;</span></div>
            <div className={"btnPageItem " + (infoPage.page === 0 ? 'btnPageActive' : '')} onClick={() => {handlePage(0)}}><span>1</span></div>
            <div className={"btnPageItem " + (infoPage.page === 1 ? 'btnPageActive' : '')} onClick={() => {handlePage(1)}}><span>2</span></div>
            <div className={"btnPageItem " + (infoPage.page === 2 ? 'btnPageActive' : '')} onClick={() => {handlePage(2)}}><span>3</span></div>
            <div className={"btnPageItem " + (infoPage.page === 3 ? 'btnPageActive' : '')} onClick={() => {handlePage(3)}}><span>4</span></div>
            <div className={"btnPageItem " + (infoPage.page === 4 ? 'btnPageActive' : '')} onClick={() => {handlePage(4)}}><span>5</span></div>
            <div className={"btnPageItem " + (infoPage.page === 5 ? 'btnPageActive' : '')} onClick={() => {handlePage(5)}}><span>6</span></div>
            <div className={"btnPageItem " + (infoPage.page === 6 ? 'btnPageActive' : '')} onClick={() => {handlePage(6)}}><span>7</span></div>
            <div className={"btnPageItem " + (infoPage.page === 7 ? 'btnPageActive' : '')} onClick={() => {handlePage(7)}}><span>8</span></div>
            <div className={"btnPageItem " + (infoPage.page === 8 ? 'btnPageActive' : '')} onClick={() => {handlePage(8)}}><span>9</span></div>
            <div className="btnPageItem" onClick={() => { (infoPage.page === 8 ? handlePage(8) : handlePage(infoPage.page + 1)) }}><span>&gt;</span></div>
          </div>
        </div>
      </div>

    </>
  )

  return html
}

export default Home
