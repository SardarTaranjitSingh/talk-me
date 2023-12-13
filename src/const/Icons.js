export const HeroWavesChape = () => {
  return (
    <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="wave1">
        <use href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
      </g>
      <g className="wave2">
        <use href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
      </g>
      <g className="wave3">
        <use href="#wave-path" x="50" y="9" fill="#fff" />
      </g>
    </svg>
  )
}
export const IconRealTimeConversation = () => {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" stroke="#11b33d" fill="none" d="M16 55c4 0 9.959-5.608 12.984-8a5.114 5.114 0 0 1 6.024-.016C38.057 49.355 44 55 48 55M20.084 26c8-3.205 14.6 3.65 24.121-.216" data-name="layer2"></path>
      <path strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" stroke="#11b33d" fill="none" d="M48 62V48.513a14 14 0 0 0-5.953-11.457l-5.527-3.881a1 1 0 0 1 0-1.637l5.526-3.881A14 14 0 0 0 48 16.2V2M16 2v14.2a14 14 0 0 0 5.954 11.457l5.526 3.881a1 1 0 0 1 0 1.637l-5.526 3.881A14 14 0 0 0 16 48.513V62m-3 0h38M13 2h38" data-name="layer1"></path>
      <path strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" stroke="#11b33d" fill="none" d="M27.816 32.77C30.687 33.5 31.833 37 32 37c.132 0 .867-3.383 4.095-4.7" data-name="layer2"></path>
    </svg>
  )
}

export const IconEffortlessIntegration = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path data-name="layer2" fill="none" stroke="#11b33d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M35.9 35.5l5.7 5.7-5.7 5.7-5.6-5.7"></path>
      <path data-name="layer2" d="M62 38.9l-3.3-3.3a5 5 0 0 0-7.1 0 5.1 5.1 0 0 0 0 7.1l5.7 5.7a5.1 5.1 0 0 1 0 7.1 5 5 0 0 1-7.1 0L38.8 44" fill="none" stroke="#11b33d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
      <path data-name="layer1" d="M26 14.1l9.6 9.6a8.6 8.6 0 0 1 0 12l-5 5a8.4 8.4 0 0 1-12 0l-9.5-9.5m-2.3 2.3l21.5-21.7M11.9 28.4L2 18.4M23.2 17L13.3 7" fill="none" stroke="#11b33d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"></path>
    </svg>
  )
}

export const IconArrowUp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <path data-name="layer2" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="5" d="M32.001 14v36"></path>
      <path data-name="layer1" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="5" d="M46 28L32 14 18 28"></path>
    </svg>
  )
}
