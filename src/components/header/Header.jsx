import React from 'react'
import "./Header.css"
import {assets} from "../../assets/assets.js";

const Header = () => {
  return (
    <div className="header">
  <video autoPlay muted loop className="background-video">
    <source src={assets.headerVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, ullam qui debitis porro voluptatibus voluptatum iste fugit, voluptas cum inventore tempora? Aspernatur ullam dicta, soluta quidem eligendi eos repellendus, aperiam ea doloribus odio sunt cum explicabo adipisci asperiores quod aliquid a autem earum maiores?.</p>
        <button>view menu</button>
      </div>
    </div>

  )
}

export default Header
