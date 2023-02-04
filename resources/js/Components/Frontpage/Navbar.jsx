import { Link } from "@inertiajs/inertia-react";
import { createTheme, Grid } from "@mui/material";
import { FaBell, FaFacebook, FaInstagram, FaShoppingCart, FaTwitter } from "react-icons/fa";
import MenuBurger from "../MenuBurger";
import PresentedLogo from "../PresentedLogo";

export default function Navbar({props, themeGrid, className}) {

    return (
        <div className={'mb-2 bg-white py-4 align-middle items-center' + className}
            style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
            <div className='hidden md:flex items-center'>
                <Grid container spacing={2} className={'items-center'}>
                    <Grid theme={themeGrid} item md={4} xs={12} className={'m-0'}>
                        <PresentedLogo className={'pl-8'} />
                    </Grid>
                    <Grid theme={themeGrid} item md={4} xs={12} className={'text-center items-center align-middle font-[600]'}>
                        Download | Ikuti kami di
                        <FaFacebook className='inline ml-3'/>
                        <FaInstagram className='inline ml-3'/>
                        <FaTwitter className='inline ml-3'/>
                    </Grid>
                    <Grid theme={themeGrid} item md={4} xs={12}>
                        <div className='flex flex-row justify-end items-center pr-10'>
                            <FaShoppingCart className='text-xl mr-8'/>
                            <FaBell className='text-xl mr-8'/>
                            {props.auth.user ? (
                                <Link href={route('dashboard')} className='mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]'>
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className='mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]'>
                                        Login
                                    </Link>
                                    <Link href={route('register')} className='mr-4 py-2 px-6 font-Gilroy-ExtraBold rounded-xl hover:bg-[#EFF1FB]'>
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className='md:hidden flex flex-row justify-between'>
                <div>
                    <MenuBurger auth={props.auth}/>
                </div>
                <div className='flex flex-row items-center'>
                    <FaShoppingCart className='text-xl mr-8'/>
                    <FaBell className='text-xl mr-8'/>
                </div>
            </div>
        </div>
    )
}