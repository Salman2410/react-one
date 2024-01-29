import React from 'react';
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";

function Brand() {
  return (
<div className='home4' id= "brands">
      <div>
          <h1>Brands</h1>
          <article>
              <div style={{
                  animationDelay:"0.3s",
              }}>
                  <AiFillGoogleCircle />
                  <p>Google</p>
              </div>
              <div style={{
                  animationDelay:"0.5s",
              }}>
                  <AiFillAmazonCircle />
                  <p>Amazon</p>
              </div>
              <div style={{
                  animationDelay:"0.7s",
              }}>
                  <AiFillYoutube />
                  <p>Youtube</p>
              </div>
              <div style={{
                  animationDelay:"1s",
              }}>
                  <AiFillInstagram />
                  <p>Instagram</p>
              </div>
          </article>
      </div>
  </div>
  )
}
export default Brand;