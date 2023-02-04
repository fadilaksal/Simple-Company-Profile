import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function PresentedLogo({className}) {
    return (<div className={" " + className}>
        <p className="font-Proxima-Nova text-light-gray">Dipersembahkan Oleh</p>
        <img src="./assets/images/welcome-footer-logo.png" alt="" className='mt-2'/>
    </div>)
}