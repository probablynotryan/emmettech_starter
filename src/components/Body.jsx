import capacitor from './pics/capacitor.jpg';
import westand from './pics/we_stand.jpg';
import mountedtv from './pics/mounted_tv.webp';

function Body() {
  return ( 
    <>
      <div className="body-style">
      <img id="we-stand" src={westand} alt="We Stand Together" />
        <div className="center-text powerful">
          <p>Dedication. Reliability. Value.</p>
        </div>
        <img className="capacitor-control" src={capacitor} alt="Capacitor logo" /><h1>Who are we?</h1>
        <div className="main-text">
          <p>Our aim has been -- <i>and will always be</i> -- to provide you with expert service, honest estimates, and helpful consultations. From professional guidance to long-lasting work, our kind and knowledgeable staff is here to help you every step of the way, because we know what it’s like to be in your shoes.</p>
          <p>At <b>Emmettech</b>, we make sure your needs come first and offer a variety of top-quality services. Our main goal is to take care of everything from the very beginning, bringing you exceptional results.</p>
        </div>
      <img className="capacitor-control" src={capacitor} alt="Capacitor logo"/><h1>What services do we offer?</h1>
      <div className="main-text">
        <img id="mounted-tv" src={mountedtv} alt="A picture of a mounted TV" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <img id="mounted-tv2" src={mountedtv} alt="A picture of a mounted TV" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <img className="capacitor-control" src={capacitor} alt="Capacitor logo"/><h1>What are our customers saying?</h1>
      </div>
    </>


   );
}

export default Body;