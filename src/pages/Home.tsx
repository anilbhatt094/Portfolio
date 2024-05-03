'use client'
import React from 'react';
import Slider from "react-slick";
import "../../public/css/slick-theme.min.css";
import "../../public/css/slick.min.css";
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
            <h1>Hi <span className='wavingHand'>🖐</span> I am Anil Bhatt</h1>
            <h2>Frontend <br/> Developer</h2>
            <p>I design, code, and build superficial things, and I love what I do.</p>
			<div className="btnconnectnow">
			<a className="downloadCV" href='/img/document/Update-CV.pdf' target='_blank' download><svg width="20px" height="20px" viewBox="0 0 24 24" fill="none">
<path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Download CV </a>
			<a className="whatsapp" href='https://wa.me/9968424239' target='_blank' download> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 29.079097 3.1186875 32.88588 4.984375 36.208984 L 2.0371094 46.730469 A 1.0001 1.0001 0 0 0 3.2402344 47.970703 L 14.210938 45.251953 C 17.434629 46.972929 21.092591 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 21.278025 46 17.792121 45.029635 14.761719 43.333984 A 1.0001 1.0001 0 0 0 14.033203 43.236328 L 4.4257812 45.617188 L 7.0019531 36.425781 A 1.0001 1.0001 0 0 0 6.9023438 35.646484 C 5.0606869 32.523592 4 28.890107 4 25 C 4 13.390466 13.390466 4 25 4 z M 16.642578 13 C 16.001539 13 15.086045 13.23849 14.333984 14.048828 C 13.882268 14.535548 12 16.369511 12 19.59375 C 12 22.955271 14.331391 25.855848 14.613281 26.228516 L 14.615234 26.228516 L 14.615234 26.230469 C 14.588494 26.195329 14.973031 26.752191 15.486328 27.419922 C 15.999626 28.087653 16.717405 28.96464 17.619141 29.914062 C 19.422612 31.812909 21.958282 34.007419 25.105469 35.349609 C 26.554789 35.966779 27.698179 36.339417 28.564453 36.611328 C 30.169845 37.115426 31.632073 37.038799 32.730469 36.876953 C 33.55263 36.755876 34.456878 36.361114 35.351562 35.794922 C 36.246248 35.22873 37.12309 34.524722 37.509766 33.455078 C 37.786772 32.688244 37.927591 31.979598 37.978516 31.396484 C 38.003976 31.104927 38.007211 30.847602 37.988281 30.609375 C 37.969311 30.371148 37.989581 30.188664 37.767578 29.824219 C 37.302009 29.059804 36.774753 29.039853 36.224609 28.767578 C 35.918939 28.616297 35.048661 28.191329 34.175781 27.775391 C 33.303883 27.35992 32.54892 26.991953 32.083984 26.826172 C 31.790239 26.720488 31.431556 26.568352 30.914062 26.626953 C 30.396569 26.685553 29.88546 27.058933 29.587891 27.5 C 29.305837 27.918069 28.170387 29.258349 27.824219 29.652344 C 27.819619 29.649544 27.849659 29.663383 27.712891 29.595703 C 27.284761 29.383815 26.761157 29.203652 25.986328 28.794922 C 25.2115 28.386192 24.242255 27.782635 23.181641 26.847656 L 23.181641 26.845703 C 21.603029 25.455949 20.497272 23.711106 20.148438 23.125 C 20.171937 23.09704 20.145643 23.130901 20.195312 23.082031 L 20.197266 23.080078 C 20.553781 22.728924 20.869739 22.309521 21.136719 22.001953 C 21.515257 21.565866 21.68231 21.181437 21.863281 20.822266 C 22.223954 20.10644 22.02313 19.318742 21.814453 18.904297 L 21.814453 18.902344 C 21.828863 18.931014 21.701572 18.650157 21.564453 18.326172 C 21.426943 18.001263 21.251663 17.580039 21.064453 17.130859 C 20.690033 16.232501 20.272027 15.224912 20.023438 14.634766 L 20.023438 14.632812 C 19.730591 13.937684 19.334395 13.436908 18.816406 13.195312 C 18.298417 12.953717 17.840778 13.022402 17.822266 13.021484 L 17.820312 13.021484 C 17.450668 13.004432 17.045038 13 16.642578 13 z M 16.642578 15 C 17.028118 15 17.408214 15.004701 17.726562 15.019531 C 18.054056 15.035851 18.033687 15.037192 17.970703 15.007812 C 17.906713 14.977972 17.993533 14.968282 18.179688 15.410156 C 18.423098 15.98801 18.84317 16.999249 19.21875 17.900391 C 19.40654 18.350961 19.582292 18.773816 19.722656 19.105469 C 19.863021 19.437122 19.939077 19.622295 20.027344 19.798828 L 20.027344 19.800781 L 20.029297 19.802734 C 20.115837 19.973483 20.108185 19.864164 20.078125 19.923828 C 19.867096 20.342656 19.838461 20.445493 19.625 20.691406 C 19.29998 21.065838 18.968453 21.483404 18.792969 21.65625 C 18.639439 21.80707 18.36242 22.042032 18.189453 22.501953 C 18.016221 22.962578 18.097073 23.59457 18.375 24.066406 C 18.745032 24.6946 19.964406 26.679307 21.859375 28.347656 C 23.05276 29.399678 24.164563 30.095933 25.052734 30.564453 C 25.940906 31.032973 26.664301 31.306607 26.826172 31.386719 C 27.210549 31.576953 27.630655 31.72467 28.119141 31.666016 C 28.607627 31.607366 29.02878 31.310979 29.296875 31.007812 L 29.298828 31.005859 C 29.655629 30.601347 30.715848 29.390728 31.224609 28.644531 C 31.246169 28.652131 31.239109 28.646231 31.408203 28.707031 L 31.408203 28.708984 L 31.410156 28.708984 C 31.487356 28.736474 32.454286 29.169267 33.316406 29.580078 C 34.178526 29.990889 35.053561 30.417875 35.337891 30.558594 C 35.748225 30.761674 35.942113 30.893881 35.992188 30.894531 C 35.995572 30.982516 35.998992 31.07786 35.986328 31.222656 C 35.951258 31.624292 35.8439 32.180225 35.628906 32.775391 C 35.523582 33.066746 34.975018 33.667661 34.283203 34.105469 C 33.591388 34.543277 32.749338 34.852514 32.4375 34.898438 C 31.499896 35.036591 30.386672 35.087027 29.164062 34.703125 C 28.316336 34.437036 27.259305 34.092596 25.890625 33.509766 C 23.114812 32.325956 20.755591 30.311513 19.070312 28.537109 C 18.227674 27.649908 17.552562 26.824019 17.072266 26.199219 C 16.592866 25.575584 16.383528 25.251054 16.208984 25.021484 L 16.207031 25.019531 C 15.897202 24.609805 14 21.970851 14 19.59375 C 14 17.077989 15.168497 16.091436 15.800781 15.410156 C 16.132721 15.052495 16.495617 15 16.642578 15 z"/></svg>9968424239 </a>
			</div>
		  </div>
          <div className='bannerImg textCenter'>
			<Image src="/img/banner.png" width={500} height={350}  alt="AB Coder Banner"/>
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

				<li>BCA
						<span>IGNOU</span>
					</li>

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
		<h3 className="primaryheading textCenter mb-15">Company Experience</h3>

		<div className='liveprojectsec'>
			<div className='liveProjectbox'>
				<a href="https://www.myholidays.com/" target='_blank'>
					<Image src="/img/project/affixious.webp" width={100} height={50} alt="Affixious"/>
				<h6>MyHolidays | Regency Holidays</h6>
				<p>(2022 to Current)</p>
				</a>
			</div>
			
			<div className='liveProjectbox'>
				<a href="https://mmbo.in/" target='_blank'>
				<Image src="/img/project/mmbo.webp" width={100} height={50} alt="Make My Business Online"/>
				<h6>MMBO</h6>
				<p>(2021 to 2022)</p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://pepfules.com/" target='_blank'>
				<Image src="/img/project/pepfuels.png" width={100} height={50} alt="Pepfuels"/>
				<h6>TruxApp | Pepfuels</h6>
				<p>(2019 to 2021)</p>
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
	 <Image src="/img/icon/adobexd.png" alt="Adobe Xd" width={100} height={50}/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/angular.png" alt="Angular" width={100} height={50}/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/bootstrap.png" alt="Bootstrap" width={100} height={50}/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/canva.png" alt="Canva" width={100} height={50}/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/css.png" alt="Css" width={100} height={50}/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/figma.png" alt="Figma" width={100} height={50}/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/html.png" alt="HTML" width={100} height={50}/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/javascript.png" width={100} height={50} alt="javascript"/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/nextjs.png" width={100} height={50} alt="Next Js"/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/photoshop.png" width={100} height={50} alt="Photoshop"/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/react.png" width={100} height={50} alt="React Js"/>
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/scss.png" width={100} height={50} alt="SCSS"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/shopify.png" width={100} height={50} alt="Shopify"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/tailwind.png" width={100} height={50} alt="Tailwind"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/vue.png" width={100} height={50} alt="Vue Js"/>
	  
      </div>

	  <div className='slideritem'>
	  <Image src="/img/icon/wordpress.png" width={100} height={50} alt="Wordpress"/>
      </div>
    </Slider>
		</div>
	</section>

	<section className='liveProject py50'>
		<div className='container'>
		<h3 className="primaryheading textCenter mb-15">Live Project</h3>

		<div className='liveprojectsec'>
			<div className='liveProjectbox'>
				<a href="https://www.myholidays.com" target='_blank'>
					<Image src="https://c.myholidays.com/cms/images/theme/myholiday_logo.svg" width={100} height={50} alt="My Holidays"/>
				<p>Company Project <span>Affixious</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.regencyholidays.com/" target='_blank'>
				<Image src="https://c.regencyholidays.com/cms/images/theme/regencyholiday_logo.svg" width={100} height={50} alt="Regency Holidays"/> 
				<p>Company Project <span>Affixious</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.pepfuels.com/" target='_blank'>
				<Image src="/img/project/logo.png" width={100} height={50} alt="Pepfuels"/>
				<p>Company Project <span>Pepfuels</span></p>
				</a>
			</div>
			<div className='liveProjectbox'>
				<a href="https://pannasarees.com/" target='_blank'>
				<Image src="/img/project/pannagiflogo.webp" width={100} height={50} alt="Panna Sarees"/>
				<p>Company Project <span>MMBO</span></p>
				</a>
			</div>
			<div className='liveProjectbox'>
				<a href="https://mamicha.in/" target='_blank'>
				<Image src="/img/project/mamicha.avif" width={100} height={50} alt="Mamicha"/>
				<p>Company Project <span>MMBO</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://uboardindia.com/" target='_blank'>
				<Image src="/img/project/uboard.png" width={100} height={50} alt="Uboard India"/>
				<p>Company Project <span>MMBO</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.vanson.in/" target='_blank'>
				<Image src="/img/project/vansons.webp" width={100} height={50} alt="Vansons"/>
				<p>Company Project <span>MMBO</span></p>
				</a>
			</div>

			<div className='liveProjectbox'>
				<a href="https://www.hikerstore.in/" target='_blank'>
				<Image src="/img/project/hikerstore.avif" width={100} height={50} alt="Hiker Store"/>
				<p>Company Project <span>MMBO</span></p>
				</a>
			</div>
		</div>
		
		</div>
	</section>

	<section className='openToWork bg-default-color py50'>
		<div className='container'>
			<div className="openToWorkGrid">
				<div className="OpentoWorkBox">
					<a href="https://wa.me/9968424239" target='_blank'>Part Time</a>
				</div>

				<div className="OpentoWorkBox">
					<a href="https://wa.me/9968424239" target='_blank'>Full Time</a>
				</div>

				<div className="OpentoWorkBox">
					<a href="https://wa.me/9968424239" target='_blank'>Freelancing Work</a>
				</div>
			</div>
		</div>
	</section>

	
    </>
  )
}

export default Home