import React from 'react'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/home.css'
import { HeroWavesChape, IconArrowUp, IconEffortlessIntegration, IconRealTimeConversation } from '../../const/Icons'




// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>






      <header id="header" className="fixed-top d-flex align-items-center header-transparent header-scrolled">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1><span> Talk <span className="txt-primary">Me</span> </span> </h1>
          </div>
          <nav id="navbar" className="navbar">
            <ul>
              <li> <a className="nav-link scrollto" href="#hero">Home</a> </li>
              <li> <a className="nav-link scrollto" href="#about">About</a> </li>
              <li> <a className="nav-link scrollto" href="#technologies">Technologies</a> </li>
            </ul>
          </nav>
        </div>
      </header>





      <section id="hero" style={{backgroundImage:'url(/assets/images/lets-talk-bg.png)'}}>
        <div className="container">
          <div className="row justify-content-center text-center">

            <div className="col-lg-7 pt-5 pt-lg-0 d-flex align-items-center content_align_middle">
              <div style={{ zIndex: 1 }}>
                <h1><span>Talk<span className="txt-primary">Me</span></span> IS A LIVE CHAT APP FOR YOUR WEBSITE<br /></h1>
                <h2>Collaborate & Assign Conversations</h2>
                <div className="text-center content_align_middle">
                  <a href="https://talk-me-chat.netlify.app/chatbot" className="btn-question scrollto fw-bold animated mob_mt_20" rel='noreferrer' target='_blank'>TAKE A LIVE DEMO</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <HeroWavesChape />
      </section>





      <main id="main">





        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 image-box d-flex justify-content-center align-items-stretch">
                <img src="/assets/images/about.jpg" alt="" />
              </div>
              <div
                className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3 className="text-uppercase">Talk<span className='txt-primary'>Me</span> - About</h3>
                <p>An open-source live chat software designed for seamless communication with website visitors. Engage in real-time conversations to enhance user experience and address queries promptly. With TalkMe, foster instant connections and provide personalized assistance on your website.</p>

                <div className="icon-box">
                  <div className="icon">
                    <IconRealTimeConversation />
                  </div>
                  <h4 className="title">Real-time Conversation</h4>
                  <p className="description">Real-time conversation involves immediate and prompt interactions, where a chatbot responds quickly to user inputs, creating a smooth and dynamic exchange similar to human conversation.</p>
                </div>

                <div className="icon-box">
                  <div className="icon">
                    <IconEffortlessIntegration />
                  </div>
                  <h4 className="title">Effortless Integration</h4>
                  <p className="description">Simply add our user-friendly script to your website, and TalkMe will be up and running in no time, facilitating instant, real-time engagement with visitors</p>
                </div>

              </div>
            </div>
          </div>
        </section>





        <section id="technologies" className="technologies">
          <div className="container">
            <div className="section-title">
              <h2>Our App Technologies</h2>
              <p>Talk<span className='txt-primary'>Me</span> Technical Stack</p>
            </div>
            <div className="row">

              <div className="col-lg-2 col-md-4 mt-4 mt-md-0">
                <div className="icon-box gap-2">
                  <img src="assets/images/icon-css.png" alt="" />
                  <h3>CSS</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mt-4 mt-md-0">
                <div className="icon-box gap-2">
                  <img src="assets/images/icon-react.png" alt="" />
                  <h3>REACT</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mt-4 mt-md-0">
                <div className="icon-box gap-2">
                  <img src="assets/images/icon-js.png" alt="" />
                  <h3>JAVASCRIPT</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box gap-2">
                  <img src="assets/images/icon-netlify.png" alt="" />
                  <h3>NETLIFY</h3>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box gap-2">
                  <img src="assets/images/icon-github.png" alt="" />
                  <h3>GITHUB</h3>
                </div>
              </div>


            </div>
          </div>
        </section>





      </main>




      <footer id="footer">
        <div className="container">
          <div className="credits"> TalkMe Made by <strong>Sardar Taranjit Singh</strong> </div>
        </div>
      </footer>




      <a href="#hero" className="back-to-top d-flex align-items-center justify-content-center active">
        <IconArrowUp />
      </a>






    </>
  )
}

