import { Link } from "@inertiajs/inertia-react";
import { Close, Fax, FaxOutlined } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useRef, useState } from "react";
import { FaBars, FaExclamation, FaHamburger } from "react-icons/fa";

export default function MenuBurger({ auth }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [btnIcon, setBtnIcon] = useState(<FaBars />)
    const buttonRef = useRef()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        if (open) {
            setAnchorEl(null);
            setBtnIcon(<FaBars />)
        } else {
            setAnchorEl(event.currentTarget);
            setBtnIcon(<Close />)
        }
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    return (
        <div className="relative">
            <button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    ref={buttonRef}
                    className={'p-5 ml-5 text-md'}
                >
                {btnIcon}
            </button>
            <div hidden={!open} className="bg-white absolute top-10 left-5 w-[200px] z-50 font-Proxima-Nova">
                <ul>
                    {auth.user ? (
                        <li><Link href={route('dashboard')}  className="block p-5 hover:bg-title hover:text-white">Dashboard</Link></li>
                    ) : (
                        <>
                        <li><Link href={route('login')}  className="block p-5 hover:bg-title hover:text-white">Login</Link></li>
                        <li><Link href={route('register')}  className="block p-5 hover:bg-title hover:text-white">Register</Link></li>
                        </>
                    )}
                </ul>
            </div>
            
        </div>
    )
}