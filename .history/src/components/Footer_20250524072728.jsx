import "./footer.css";
import ApeCode from "/public/ApeCode2.png";


function Footer() {
    return (
        <>
        <div className="footerContainer">
           <p>&copy; {new Date().getFullYear()} Dj D | Powered by APE CODE</p>
           <div>
          <img className="apeCodeImg2" src={ApeCode} alt="" />
        </div> 
        </div>
        </>
    );
}

export default Footer;