import "./footer.css";
import ApeCode from "/public/ApeCode2.png";


function Footer() {
    return (
        <>
        <div className="footerContainer">
           <p className="Ftext">&copy; {new Date().getFullYear()} Dj DEJ | Powered by APE CODE</p>
           <div>
          <img className="apeCodeImg2" src={ApeCode} alt="" />
        </div> 
        </div>
        </>
    );
}

export default Footer;