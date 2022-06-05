import './assets/css/App.css'
import Header from './components/Header'

function App() {
  let html = (
    <div className='Front-End-Test---Home-view'>
      <Header></Header>
      <div className="Rectangle">
        <span className="All">
          All
        </span>
      </div>

      <div class="Rectangle2">
        <span class="My-faves">
          My faves
        </span>
      </div>
    </div>
  )

  return html
}

export default App
