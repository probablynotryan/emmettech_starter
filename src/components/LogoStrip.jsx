import logo from './pics/ETI3_edited.webp';

function LogoStrip() {
  return (
  <>
    <div className="logostrip"> 
      <img src={logo} alt="logo" />
      <span>(503) 800-8800</span>
    </div>
  </>)
}

export default LogoStrip;