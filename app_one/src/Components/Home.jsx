import React from 'react'
import vg from "../assets/2.webp"

const Home = () => {
  return (

    <>
    <div className='home'>
        
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

    </>
  )
}

export default Home