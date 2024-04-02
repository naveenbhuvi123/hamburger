import Header from '../Header'
import './index.css'

const About = () => (
  <div className="home-container">
    <Header />
    <div className="route-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        className="home-img"
        alt="about"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        className="home-img-1"
        alt="about"
      />
    </div>
  </div>
)

export default About
