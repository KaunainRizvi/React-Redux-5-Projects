import React from 'react'
import vg from "../assets/2.webp"


import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (

    <>
    <div className='home' id='home'>
        
        <main>
            <h1>Tech Boom</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div> 
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dignissimos nostrum nobis, animi quod similique veniam atque nemo molestiae commodi, deserunt numquam. Nesciunt iste architecto modi laboriosam obcaecati sequi sit.</p>

        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1> Who we are</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, modi harum earum neque reiciendis tempore quidem explicabo quaerat corrupti ab perferendis quisquam debitis maxime dolore impedit commodi porro officia itaque.</p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{ animationDelay : "0.3s"}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
                </div>

                <div style={{ animationDelay : "0.5s"}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
                </div>

                <div style={{ animationDelay : "0.7s"}}>
              <AiFillYoutube/>
              <p>Youtube</p>
                </div>


                <div style={{ animationDelay : "0.1s"}}>
              <AiFillInstagram/>
              <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

    </>
  )
}

export default Home