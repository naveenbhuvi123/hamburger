import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="route-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        className="home-img"
        alt="home"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        className="home-img-1"
        alt="home"
      />
    </div>
  </div>
)

export default Home
