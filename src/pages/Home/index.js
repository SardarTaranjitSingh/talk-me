import React from 'react'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/home.css'




// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>






<header id="header" className="fixed-top d-flex align-items-center header-transparent">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="logo">
        <h1> <a href="index.html"> <span> Talk <span className="txt-green">Me</span> </span> </a> </h1>
      </div>
      <nav id="navbar" className="navbar">
        <ul>
          <li> <a className="nav-link scrollto active" href="#hero">Home</a> </li>
          <li> <a className="nav-link scrollto" href="#about">About</a> </li>
          <li> <a className="nav-link scrollto" href="#features">Features</a> </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>





  <section id="hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-lg-7 pt-5 pt-lg-0 d-flex align-items-center content_align_middle">
          <div style={{zIndex: 1}}>
            <h1><span>Talk<span className="txt-green">Me</span></span> IS A LIVE CHAT APP FOR YOUR WEBSITE<br/></h1>
            <h2>Collaborate & Assign Conversations</h2>
            <div className="text-center text-lg-start content_align_middle">
              <a href="/" className="btn-get-started scrollto fw-bold animated" target="_blank">GET CODE FROM GITHUB</a>
              <a href="/" className="btn-question scrollto fw-bold animated mob_mt_20" target="_blank">TAKE A LIVE DEMO</a>
            </div>
          </div>
        </div>
        <div
          className="col-lg-2 hero-img d-none d-lg-block d-flex align-content-center flex-wrap justify-content-center hide_section">
          <div className="d-flex justify-content-between gap-5 animated">
            <img src="/assets/images/img-taximode-qr-scan.png" alt="TalkMe QR Scan View and View Demo" className="h-100 img-fluid img-qr-laptop"/>
          </div>
        </div>
      </div>
    </div>
    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
      </defs>
      <g className="wave1">
        <use x="50" y="3" fill="rgba(255,255,255, .1)"/>
      </g>
      <g className="wave2">
        <use x="50" y="0" fill="rgba(255,255,255, .2)"/>
      </g>
      <g className="wave3">
        <use x="50" y="9" fill="#fff"/>
      </g>
    </svg>
  </section>





  <main id="main">





    <section id="about" className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"></div>
          <div
            className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3 className="text-uppercase"> Our Feature</h3>
            <p>Why Choose TaxiMode? TaxiMode-Taxi Booking PWA Mobile Template is a Premium & High Quality UI Kit for
              Taxi Booking App with many features. TaxiMode came with unique style and niche, you can easily edit and
              customize all elements with design components which can speed up design process for your projects.</p>
            <div className="icon-box">
              <div className="icon">
                <img src="/assets/images/icn-pwa.svg" alt="PWA Ready"/>
              </div>
              <h4 className="title">
                <a href="/">PWA Ready (Progressive Web App)</a>
              </h4>
              <p className="description">TaxiMode is a PWA App which looks and feels same like Application. With the Add to
                Home Screen option you can use Website like an App.</p>
            </div>
            <div className="icon-box">
              <div className="icon">
                <img src="/assets/images/icn-theme-ld.svg" alt="Dark & Light Theme"/>
              </div>
              <h4 className="title">
                <a href="/"> Light & Dark Mode HTML Template</a>
              </h4>
              <p className="description">A helpful tool for those who work overnight. The dark background will put less
                strain on the eyes.</p>
            </div>
            <div className="icon-box">
              <div className="icon">
                <img src="/assets/images/icn-app-style.svg" alt="App Style Design"/>
              </div>
              <h4 className="title">
                <a href="/">App Style Design</a>
              </h4>
              <p className="description">TaxiMode has a really Unique, Stylish & Modern design that resembles applications.
                TaxiMode features a lot of app-style components as well.</p>
            </div>
            <div className="icon-box">
              <div className="icon">
                <img src="/assets/images/icn-pages.svg" alt="Pages"/>
              </div>
              <h4 className="title">
                <a href="/">30+ Pages</a>
              </h4>
              <p className="description">All of the pages needed for the taxi booking services procedure are included in
                TaxiMode. It has more than 30 pages.</p>
            </div>
          </div>
        </div>
      </div>
    </section>





    <section id="features" className="features">
      <div className="container">
        <div className="section-title">
          <h2>Our App Features</h2>
          <p>TalkMe Core Features</p>
        </div>
        <div className="row">

          <div className="col-lg-3 col-md-4">
            <div className="icon-box gap-2">
              <img src="/assets/images/icn-html.svg" alt="" />
              <h3> HTML </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box gap-2">
              <img src="/assets/images/icn-scss.svg" alt="" />
              <h3> SCSS </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box gap-2">
              <img src="/assets/images/icn-bootstrap.svg" alt="" />
              <h3> Bootstrap 5 (v5.3 Latest) </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box gap-2">
              <img src="/assets/images/icn-theme.svg" alt="" />
              <h3> Light & Dark Template </h3>
            </div>
          </div>


        </div>
      </div>
    </section>





  </main>





  <footer id="footer">
    <div className="container">
      <div className="credits"> 2023 © Made by <strong>Sardar Taranjit Singh</strong> </div>
    </div>
  </footer>





  {/* <a href="/" className="back-to-top d-flex align-items-center justify-content-center">
    <i className="bi bi-arrow-up-short"></i>
  </a> */}





  {/* <div id="preloader"></div> */}
      




    </>
  )
}

