import "./footer.css";
import ApeCode from "../assets/ApeCode.png";


function Footer() {
    return (
        <>
        <div className="footerContainer">
           <p>&copy; {new Date().getFullYear()} Ervin Clay Jr Portfolio | Powered by APE CODE</p>
           <div>
          <img className="apeCodeImg2" src={ApeCode} alt="" />
        </div> 
        </div>
        </>
    );
}

export default Footer;