import "./topbar.scss";
import { Person, Mail,Facebook,GitHub,Instagram } from "@material-ui/icons";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            adnan.turjoy
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+8801778912263</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>aturjoy4@gmail.com</span>
          </div>
          <div className="itemContainer">
            
          <a href="https://facebook.com/adnan.turjoy.9"><Facebook className='iconfb'/></a>  
          </div>
          <div className="itemContainer">
            
         <a href="https://github.com/AdnanTurjoy"><GitHub className='icongh'/></a>   
          </div>
          <div className="itemContainer">
            
          <a href="https://www.instagram.com/turjoy_adnan"><Instagram className='iconig'/></a>  
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
