import React from 'react'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/home.css'




// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>






      <header id="header" className="fixed-top d-flex align-items-center header-transparent header-scrolled">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1> <a href="index.html"> <span> Talk <span className="txt-green">Me</span> </span> </a> </h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li> <a className="nav-link scrollto" href="#hero">Home</a> </li>
              <li> <a className="nav-link scrollto" href="#about">About</a> </li>
              <li> <a className="nav-link scrollto" href="#technologies">Technologies</a> </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>





      <section id="hero">
        <div className="container">
          <div className="row justify-content-center text-center">

            <div className="col-lg-7 pt-5 pt-lg-0 d-flex align-items-center content_align_middle">
              <div style={{ zIndex: 1 }}>
                <h1><span>Talk<span className="txt-green">Me</span></span> IS A LIVE CHAT APP FOR YOUR WEBSITE<br /></h1>
                <h2>Collaborate & Assign Conversations</h2>
                <div className="text-center content_align_middle">
                  <a href="https://talk-me-chat.netlify.app/chatbot/chat-widget.html" className="btn-question scrollto fw-bold animated mob_mt_20" rel='noreferrer' target='_blank'>TAKE A LIVE DEMO</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <svg class="hero-waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
          </defs>
          <g class="wave1">
            <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
          </g>
          <g class="wave2">
            <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
          </g>
          <g class="wave3">
            <use href="#wave-path" x="50" y="9" fill="#fff" />
          </g>
        </svg>
      </section>





      <main id="main">





        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch"></div>
              <div
                className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3 className="text-uppercase">Talk<span style={{ color: '#2dbb54' }}>Me</span> - About</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia explicabo eum cumque alias ipsum necessitatibus, libero rerum est perferendis minima ratione a dolores recusandae quas exercitationem sapiente debitis, eaque velit consectetur! Fuga, beatae repellendus incidunt voluptate magnam architecto, culpa, possimus optio ipsam esse ex fugiat quae temporibus at nostrum asperiores?</p>

                <div className="icon-box">
                  <div className="icon">
                    <img src="/assets/images/icn-pwa.svg" alt="" />
                  </div>
                  <h4 className="title">PWA Ready (Progressive Web App)</h4>
                  <p className="description">TaxiMode is a PWA App which looks and feels same like Application. With the Add to Home Screen option you can use Website like an App.</p>
                </div>

              </div>
            </div>
          </div>
        </section>





        <section id="technologies" className="technologies">
          <div className="container">
            <div className="section-title">
              <h2>Our App Technologies</h2>
              <p>Talk<span style={{ color: '#2dbb54' }}>Me</span> Technical Stack</p>
            </div>
            <div className="row">

              <div className="col-lg-3 col-md-4">
                <div className="icon-box gap-2">
                  <img src="/assets/images/icn-html.svg" alt="" />
                  <h3>JSX</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box gap-2">
                  <img src="/assets/images/icn-scss.svg" alt="" />
                  <h3>CSS</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box gap-2">
                  <img src="/assets/images/icn-bootstrap.svg" alt="" />
                  <h3>REACT</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box gap-2">
                  <img src="/assets/images/icn-theme.svg" alt="" />
                  <h3>JAVASCRIPT</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box gap-2">
                  <img src="/assets/images/icn-theme.svg" alt="" />
                  <h3>NETLIFY</h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box gap-2">
                  <img src="/assets/images/icn-theme.svg" alt="" />
                  <h3>GITHUB</h3>
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

