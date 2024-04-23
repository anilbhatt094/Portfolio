import React from 'react';
import "../../public/css/home.css";

function Home() {
  return (
    <>
    <section className='bannerSection py50'>
      <div className='container'>
        <div className='bannerFlex'>
        <div className='bannerContent'>
            <h1>Hi <span className='wavingHand'>🖐</span> I'm Anil Bhatt</h1>
            <h2>Frontend <br/> Developer</h2>
            <p>I design, code, and build superficial things, and I love what I do.</p>
          </div>
          <div className='bannerImg textCenter'>
            <img src='img/banner.png'/>
          </div>
          
        </div>
      </div>
    </section>
    <section className='py50 bg-default-color'>
      <div className='container'>
        <div className='aboutSection'>
          <h3 className='primaryheading textCenter'>About Us</h3>
          <p>Hello, I’m Anil Bhatt, I'm a Web Designer and Developer based in Noida, India. I have a passion for web design and love to create for web and mobile devices.If you have a web based project that you want to get started.</p>
          <p>We are a team of design-led developers & designers that believe in the value of well-considered design and how it can positively impact lives, communities and the broader environment.</p>
          <ul>
            <li><span>04+</span> Years of experience this field</li>
            <li><span>15+</span> Number of projects completed</li>
          </ul>
          </div>
      </div>
    </section>
    </>
  )
}

export default Home