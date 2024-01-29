import React from 'react'
import vg from "../assets/2.webp";


const Home = () => {
  return <>
  <div className='home' id="home">
      <main>
          <h1>Techystar</h1>
          <p>Solution to all your problems</p>
      </main>
  </div>
  <div className='home2' >
      <img src={vg} alt="Graphics" />

      <div>
          <p>We are your only solution to tech problems you face everyday.
              We are leading tech company whose aim is to increase the problemsolving ability in childern. 
          </p>
      </div>
  </div>
  
  

  </>;
}

export default Home