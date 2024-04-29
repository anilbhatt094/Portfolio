'use client'
import React from 'react';
import Slider from "react-slick";
import "../../public/css/home.css";
import Image from "next/image";
function Home() {

	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
    	autoplaySpeed: 2000,
    	arrows:true,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 2,
			  slidesToScroll: 1,
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };

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
			<Image src="img/banner.png" alt="AB Coder Banner"/>
          </div>
          
        </div>
      </div>
    </section>
    <section className='py50 bg-default-color'>
      <div className='container'>
        <div className='aboutSection'>
          <h3 className='primaryheading textCenter'>About Us</h3>
          <p>Skilled UI developer and Frontend developer with 4+ years of exprience in Html, CSS, JavaSctipt, Shopify, Wordpress, RectJs, Next Js Tailwind etc. Successfully created many project from scratch and contributed to 8+ project for the company. Proficient in version control systems like Git, Github and Azure skilled.</p>
          <p>We are a team of design-led developers & designers that believe in the value of well-considered design and how it can positively impact lives, communities and the broader environment.</p>
          <ul>
            <li><span>04+</span> Years of experience this field</li>
            <li><span>15+</span> Number of projects completed</li>
          </ul>
          </div>
      </div>
    </section>
    <section className='py50'>
    <div className='container'>
    <h3 className='primaryheading textCenter'>My Skills</h3>
    <div className='myskillpnl'>
      <div className='myskillbox'>
      <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
</svg>
<h4>Developer</h4>
<p>#HTML, #CSS, #ReactJs, NextJs, JavaScript, VueJs, #Wordpress, #Shopify, #ModuleCss, #Scss, Jquery</p>
      </div>

      <div className='myskillbox'>
      <svg  height="100px" width="100px" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24">
<path d="M23.6,20.9L20,17.3c-0.6-0.6-1.5-0.6-2,0l-1.4-1.4c1.5-1.7,2.4-3.9,2.4-6.3C19,4.3,14.7,0,9.5,0S0,4.3,0,9.5S4.3,19,9.5,19
	c2.4,0,4.7-0.9,6.3-2.4l1.4,1.4c-0.5,0.6-0.5,1.5,0,2l3.6,3.6c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l0.6-0.6
	C24.1,22.4,24.1,21.4,23.6,20.9z M5.8,1.9l2.1,1.8L7.1,5.3C7,5.4,7,5.6,7,5.7S7.2,5.9,7.3,6l2.5,0.8l-0.7,2L7.7,8.1
	C7.6,8,7.4,8,7.3,8S7.1,8.2,7,8.3L6.1,11H5c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.1,0.3-0.1,0.4l0.4,1.7l-0.4,0.4l-1.6-1.6
	C2.8,12.1,2.6,12,2.5,12H1.4C1.1,11.2,1,10.4,1,9.5C1,6.2,3,3.3,5.8,1.9z M1.8,13h0.5l1.9,1.9C4.2,15,4.4,15,4.5,15s0.3,0,0.4-0.1
	l1-1C6,13.7,6,13.5,6,13.4L5.6,12h0.9c0.2,0,0.4-0.1,0.5-0.3l0.8-2.5l1.5,0.7C9.4,10,9.6,10,9.7,10C9.8,9.9,9.9,9.8,10,9.7l1-3
	c0.1-0.3-0.1-0.5-0.3-0.6L8.2,5.2l0.7-1.5C9.1,3.5,9,3.3,8.8,3.1l-2-1.7C7.7,1.2,8.6,1,9.5,1c4.1,0,7.5,2.9,8.3,6.8l-2.5,1.3
	C15.1,9.1,15,9.3,15,9.5v0.8L14.3,11h-1.8c-0.2,0-0.4,0.1-0.4,0.3l-1,2c-0.1,0.2-0.1,0.4,0.1,0.6l1,1c0.1,0.1,0.2,0.1,0.4,0.1h0.6
	l0.6,1.8c-1.3,0.7-2.7,1.2-4.3,1.2C6.1,18,3.1,15.9,1.8,13z M14.6,16.3L14,14.3c-0.1-0.2-0.3-0.3-0.5-0.3h-0.8l-0.6-0.6l0.7-1.4h1.7
	c0.1,0,0.3-0.1,0.4-0.1l1-1c0.1-0.1,0.1-0.2,0.1-0.4V9.8l2-1c0,0.2,0,0.4,0,0.7C18,12.3,16.7,14.7,14.6,16.3z M22.9,22.3l-0.6,0.6
	c-0.2,0.2-0.5,0.2-0.7,0L18,19.3c-0.2-0.2-0.2-0.5,0-0.7l0.6-0.6c0.1-0.1,0.2-0.1,0.4-0.1s0.3,0,0.4,0.1l3.6,3.6
	C23,21.8,23,22.1,22.9,22.3z"/>
</svg>
<h4>Marketing</h4>
<p>#SEO, #SMO, #GoogleAds, GoogleAnalytics, #GoogleAdsens, #OffPage, #OnPage, #GoogleTagManager, #SearchConsole</p>
      </div>

      <div className='myskillbox'>
      <svg  height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
	 viewBox="0 0 512 512">
<g>
	<g>
		<g>
			<path d="M485.456,44.327h-32.59c-4.484,0-8.118,3.634-8.118,8.118s3.634,8.118,8.118,8.118h32.59
				c5.684,0,10.308,4.623,10.308,10.307v290.286c0,5.684-4.624,10.307-10.308,10.307H26.544c-5.684,0-10.308-4.623-10.308-10.307
				V70.87c0-5.684,4.624-10.307,10.308-10.307h399.261c4.484,0,8.118-3.634,8.118-8.118c0-4.484-3.634-8.118-8.118-8.118H26.544
				C11.908,44.327,0,56.234,0,70.87v290.286c0,14.635,11.908,26.543,26.544,26.543h458.912c14.636,0,26.544-11.908,26.544-26.543
				V70.87C512,56.234,500.094,44.327,485.456,44.327z"/>
			<path d="M175.771,336.083h274.931c4.484,0,8.118-3.634,8.118-8.118V104.06c0-4.484-3.634-8.118-8.118-8.118h-337.71
				c-4.484,0-8.118,3.634-8.118,8.118v223.905c0,4.484,3.634,8.118,8.118,8.118h35.719c4.484,0,8.118-3.634,8.118-8.118
				c0-4.484-3.634-8.118-8.118-8.118h-27.601V112.178h321.474v207.669H175.771c-4.484,0-8.118,3.634-8.118,8.118
				C167.653,332.45,171.286,336.083,175.771,336.083z"/>
			<path d="M484.797,260.148v-88.271c0-4.484-3.634-8.118-8.118-8.118c-4.484,0-8.118,3.634-8.118,8.118v88.271
				c0,4.484,3.634,8.118,8.118,8.118C481.163,268.266,484.797,264.632,484.797,260.148z"/>
			<path d="M93.22,216.012c0-17.876-14.543-32.419-32.417-32.419c-17.876,0-32.419,14.544-32.419,32.419
				c0,17.875,14.544,32.419,32.419,32.419C78.678,248.432,93.22,233.888,93.22,216.012z M60.803,232.196
				c-8.923,0-16.183-7.26-16.183-16.183s7.26-16.183,16.183-16.183c8.922,0,16.181,7.26,16.181,16.183
				S69.725,232.196,60.803,232.196z"/>
			<path d="M44.079,122.423h31.028c4.484,0,8.118-3.634,8.118-8.118c0-4.484-3.634-8.118-8.118-8.118H44.079
				c-4.484,0-8.118,3.634-8.118,8.118C35.961,118.79,39.594,122.423,44.079,122.423z"/>
			<path d="M44.079,157.351h31.028c4.484,0,8.118-3.634,8.118-8.118c0-4.484-3.634-8.118-8.118-8.118H44.079
				c-4.484,0-8.118,3.634-8.118,8.118C35.961,153.718,39.594,157.351,44.079,157.351z"/>
			<path d="M75.107,274.674H44.079c-4.484,0-8.118,3.634-8.118,8.118c0,4.484,3.634,8.118,8.118,8.118h31.028
				c4.484,0,8.118-3.634,8.118-8.118C83.225,278.308,79.59,274.674,75.107,274.674z"/>
			<path d="M75.107,309.602H44.079c-4.484,0-8.118,3.634-8.118,8.118c0,4.484,3.634,8.118,8.118,8.118h31.028
				c4.484,0,8.118-3.634,8.118-8.118C83.225,313.236,79.59,309.602,75.107,309.602z"/>
			<path d="M182.322,137.577l-35.18,35.18c-3.17,3.171-3.17,8.311,0,11.481c1.586,1.585,3.664,2.377,5.741,2.377
				s4.155-0.792,5.741-2.377l35.18-35.18c3.17-3.171,3.17-8.311,0-11.481C190.633,134.409,185.494,134.409,182.322,137.577z"/>
			<path d="M177.998,210.289c1.585,1.585,3.663,2.377,5.74,2.377c2.077,0,4.155-0.792,5.741-2.378l60.086-60.089
				c3.17-3.17,3.17-8.311-0.001-11.48c-3.169-3.169-8.31-3.17-11.48,0.001l-60.086,60.089
				C174.828,201.979,174.828,207.119,177.998,210.289z"/>
			<path d="M161.123,235.28c2.077,0,4.155-0.792,5.741-2.377l5.585-5.585c3.17-3.171,3.17-8.311,0-11.481
				c-3.171-3.169-8.311-3.169-11.481,0l-5.585,5.585c-3.17,3.171-3.17,8.311,0,11.481
				C156.969,234.488,159.046,235.28,161.123,235.28z"/>
			<path d="M380.188,415.152H153.972c-0.079,0-0.156,0.01-0.235,0.012c-0.107,0.003-0.213,0.009-0.319,0.016
				c-0.224,0.015-0.445,0.04-0.664,0.073c-0.084,0.013-0.169,0.023-0.254,0.039c-0.633,0.116-1.24,0.304-1.813,0.558
				c-0.015,0.007-0.031,0.011-0.047,0.017l-40.304,18.142c-2.913,1.311-4.786,4.208-4.786,7.403c0,3.194,1.873,6.092,4.786,7.403
				l40.304,18.142c0.017,0.008,0.036,0.013,0.053,0.021c0.208,0.092,0.421,0.172,0.638,0.247c0.049,0.017,0.096,0.038,0.146,0.053
				c0.237,0.077,0.479,0.141,0.726,0.196c0.029,0.006,0.057,0.016,0.087,0.023c0.255,0.054,0.516,0.094,0.78,0.124
				c0.019,0.002,0.038,0.007,0.056,0.009c0.268,0.028,0.541,0.042,0.816,0.043c0.01,0,0.019,0.001,0.029,0.001h226.216
				c14.481,0,26.263-11.781,26.263-26.26S394.669,415.152,380.188,415.152z M145.854,446.996l-12.409-5.585l12.409-5.585V446.996z
				 M380.188,451.435H162.09v-20.047h218.098c5.529,0,10.027,4.496,10.027,10.024S385.718,451.435,380.188,451.435z"/>
		</g>
	</g>
</g>
</svg>
<h4>Graphic</h4>
<p>#PhotoShop, #AdobeXD, #Figma, #Canva</p>
      </div>
    </div>
    </div>
    </section>

	<section className='py50 bg-default-color'>
		<div className='container'>
			<div className='educationExperince'>
				<div className='educationSection'>
				<h3 className="primaryheading textCenter mb-15">Experinence</h3>
				<ul>
					<li>Frontend Developer (Aug 2022 - Current) 
						<span>Affixious <a href='https://www.regencyholidays.com/' target='_blank'>(www.regencyholidays.com) </a> | <a href='www.myholidays.com' target='_blank' >(www.myholidays.com)</a></span>
					</li>

					<li>Frontend Developer (May 2021 - 2022) 
						<span>MMBO <a href='https://www.mmbo.in/' target='_blank'>(www.mmbo.in) </a></span>
					</li>

					<li>Frontend Developer (Sep2019 - April 2021) 
						<span>Pepfuels <a href='https://www.pepfuels.com/' target='_blank'>(www.pepfuels.com) </a></span>
					</li>
				</ul>
				</div>
				<div className='educationSection'>
				<h3 className="primaryheading textCenter mb-15">Qualification</h3>
				<ul>
					<li>Intermediate (Science Math) 
						<span>Institution: CBSE Board, Delhi, India.</span>
					</li>

					<li>Matriculation
						<span>Institution: CBSE Board, Delhi, India.</span>
					</li>

					<li>Website Design & Multimedia Course (1 Year Diploma)
						<span>Oxford Institute, Delhi</span>
					</li>
					<li>Master Diploma in Computer System (MDCS)
						<span>Delhi Academic Institute of Information Technology</span>
					</li>
				</ul>
				</div>
			</div>
		</div>
	</section>

	<section className='marqueeslide py50 bg-default-color'>
		<h5>Senior Website Developer from India</h5>
		<h5>Senior Website Developer from India</h5>
	</section>

	<section className='liveProject py50'>
		<div className='container'>
		<h3 className="primaryheading textCenter mb-15">Live Project</h3>

		<div className='liveprojectsec'>
			<div className='liveProjectbox'>
				<a href="https://www.myholidays.com/" target='_blank'>
					<Image src="https://c.myholidays.com/cms/images/theme/myholiday_logo.svg" alt="My Holidays"/>
				<p>Company Project <span>Affixious.com</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.regencyholidays.com/" target='_blank'>
				<Image src="https://c.regencyholidays.com/cms/images/theme/regencyholiday_logo.svg" alt="Regency Holidays"/>
				<p>Company Project <span>Affixious.com</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.pepfuels.com/" target='_blank'>
				<Image src="https://www.pepfuels.com/img/logo.png" alt="Pepfuels"/>
				<p>Company Project <span>Pepfuels.com</span></p>
				</a>
			</div>
			<div className='liveProjectbox'>
				<a href="https://pannasarees.com/" target='_blank'>
				<Image src="https://pannasarees.com/cdn/shop/files/pannagiflogo.gif?v=1643112741&width=300" alt="Panna Sarees"/>
				<p>Company Project <span>MMBO.in</span></p>
				</a>
			</div>
			<div className='liveProjectbox'>
				<a href="https://mamicha.in/" target='_blank'>
				<Image src="https://mamicha.in/cdn/shop/files/green_logo-03_1_1.png?v=1709391495&width=400" alt="Mamicha"/>
				<p>Company Project <span>MMBO.in</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://uboardindia.com/" target='_blank'>
				<Image src="https://uboardindia.com/assets/logo/logo.png" alt="Uboard India"/>
				<p>Company Project <span>MMBO.in</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.vanson.in/" target='_blank'>
				<Image src="https://www.vanson.in/cdn/shop/files/WhatsApp_Image_2024-02-18_at_1.23.17_PM.jpg?v=1708342329" alt="Vansons"/>
				<p>Company Project <span>MMBO.in</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.hikerstore.in/" target='_blank'>
				<Image src="https://www.hikerstore.in/cdn/shop/files/Final2.png?v=1670699142&width=280" alt="Hiker Store"/>
				<p>Company Project <span>MMBO.in</span></p>
				</a>
			</div>
		</div>
		
		</div>
	</section>

	<section className='py50 bg-default-color'>
		<div className='container'>
		<h3 className="primaryheading textCenter mb-15">Skills</h3>
		<Slider {...settings} className='skillsSlider'>
      <div className='slideritem'>
	 <Image src="img/icon/adobexd.png" alt="Adobe Xd"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/angular.png" alt="Angular"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/bootstrap.png" alt="Bootstrap"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/canva.png" alt="Canva"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/css.png" alt="Css"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/figma.png" alt="Figma"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/html.png" alt="HTML"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/javascript.png" alt="javascript"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/nextjs.png" alt="Next Js"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/photoshop.png" alt="Photoshop"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/react.png" alt="React Js"/>
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/scss.png" alt="SCSS"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/shopify.png" alt="Shopify"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/tailwind.png" alt="Tailwind"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/vue.png" alt="Vue Js"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="img/icon/wordpress.png" alt="Wordpress"/>
      </div>
    </Slider>
		</div>
	</section>

	
    </>
  )
}

export default Home