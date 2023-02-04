import { Link } from "@inertiajs/inertia-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function PresentedLogo({className}) {
    
    return (<Link href={route('home')} className={"block " + className}>
        <p className="font-Proxima-Nova text-light-gray">Dipersembahkan Oleh</p>
        <img src="/assets/images/welcome-footer-logo.png" alt="" className='mt-2'/>
    </Link>)
}