import CardLayanan from '@/Components/Frontpage/CardLayanan';
import DividerNotif from '@/Components/Frontpage/DividerNotif';
import { Footer } from '@/Components/Frontpage/Footer';
import Navbar from '@/Components/Frontpage/Navbar';
import ImageTile from '@/Components/Frontpage/Product/ImageTile';
import ProductCard from '@/Components/Frontpage/Product/ProductCard';
import { ProductListCard } from '@/Components/Frontpage/Product/ProductListCard';
import InputLabelRegister from '@/Components/InputLabelRegister';
import MenuBurger from '@/Components/MenuBurger';
import PresentedLogo from '@/Components/PresentedLogo';
import TextInputRegister from '@/Components/TextInputRegister';
import { Link, Head } from '@inertiajs/inertia-react';
import { ChatRounded, SaveRounded, Share } from '@mui/icons-material';
import { Breadcrumbs, Button, Checkbox, createTheme, Grid, Menu, MenuItem, OutlinedInput, Typography } from '@mui/material';
import { FaArrowRight, FaBell, FaCalendar, FaCartArrowDown, FaChevronRight, FaCircle, FaClock, FaCog, FaEnvelopeOpen, FaFacebook, FaFax, FaHamburger, FaHospital, FaInstagram, FaLocationArrow, FaMapPin, FaMinus, FaPhone, FaPlus, FaSearch, FaShoppingCart, FaSlidersH, FaStar, FaTimesCircle, FaTrash, FaTrashAlt, FaTwitter } from 'react-icons/fa';

export default function LacakPemeriksaan(props) {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 375,
                md: 760,
                lg: 1024,
                xl: 1536,
            },
        },
    });

    return (
        <>
            <Head title="Lacak Pemeriksaan" />
            <div className="relative min-h-screen text-title bg-[#F5F8FA] dark:bg-gray-900 sm:items-center sm:pt-0 font-Gilroy-Light">
                <Navbar props={props} themeGrid={theme}/>
                
                <div className='px-6 py-10 md:px-24'>
                    <div className=''>
                        <Breadcrumbs aria-label="breadcrumb" separator={<FaChevronRight  className={'text-light-gray mt-4'}/>}>
                            <Link underline="hover" href="#" className={' block mt-4 mr-5 font-Gilroy-ExtraBold text-light-gray'}>
                                Home
                            </Link>
                            <span className={' block mt-4 mr-5 ml-5 font-Gilroy-ExtraBold text-title'}>
                                Lacak Pemeriksaan
                            </span>
                        </Breadcrumbs>
                    </div>

                    <div className='my-10'>
                        <div className='m-auto md:w-10/12 rounded-xl bg-white'>
                            <div className='px-12 py-10'>
                                <h2 className='font-Gilroy-ExtraBold text-[24pt] font-bold text-title'>Pemeriksaan Anda</h2>
                                
                                <div className='flex flex-col md:flex-row mt-10 items-start'>

                                    <div className='text-title font-bold w-[150px] mr-5'>
                                        <img src='/assets/images/product/rs.png' className='w-full'/>
                                    </div>

                                    <div className='font-Proxima-Nova mr-2'>
                                        <h4 className='text-[12pt] text-gray'>Layanan Kesehatan</h4>
                                        <h3 className='text-[22pt] font-bold text-title'>PCR Swab Test (Drive Thru) Hasil 1 Hari Kerja</h3>
                                        <div className='text-orange-400 mt-2 text-[18pt] font-extrabold mr-6'>Rp. 1.400.000</div>

                                        <div className='flex flex-row mt-8 justify-between items-start'>
                                            <div className=''>
                                                <span className='text-light-gray text-[16px]'>Tanggal Pengambilan</span>
                                                <div className='flex flex-row mt-2 font-Proxima-Nova items-center'>
                                                    <FaCalendar className='mr-4'/>
                                                    <span className='text-title font-bold text-[16px]'>Jum’at, 5 Maret 2021</span>
                                                </div>
                                            </div>
                                            <div className=''>
                                                <span className='text-light-gray text-[16px]'>Waktu Pemeriksaan</span>
                                                <div className='flex flex-row mt-2 font-Proxima-Nova items-center'>
                                                    <FaClock className='mr-4'/>
                                                    <span className='text-title font-bold text-[16px]'>14:00 WIB</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8 p-8' style={{ background: 'linear-gradient(90deg, #00D9D5 0%, rgba(0, 217, 213, 0) 100%)' }}>
                                <div className="flex flex-col md:flex-row md:justify-between items-center">
                                    <h2 className='font-Proxima-Nova text-[18pt] text-title'><FaCircle className='inline text-[10pt]'/> Menunggu Hasil Pemeriksaan...</h2>
                                    <div className='font-Proxima-Nova font-bold text-[12pt] text-title mt-8 text-start md:mt-0 md:text-end'>
                                        Lihat Detail <FaArrowRight className='inline mr-4' />
                                    </div>
                                </div>
                            </div>
                            <div className='px-12 py-10'>
                                <div className="flex flex-row mb-6 justify-between items-center font-Proxima-Nova text-[16px]">
                                    <span className='font-bold text-light-gray'>Nama Pasien</span>
                                    <div className='font-extrabold text-title text-end'>Budi Hartono</div>
                                </div>
                                <div className="flex flex-row mb-6 justify-between items-center font-Proxima-Nova text-[16px]">
                                    <span className='font-bold text-light-gray'>Tanggal Pembayaran</span>
                                    <span className='font-extrabold text-title'>12 Februari 2020</span>
                                </div>
                                <div className="flex flex-row mb-6 justify-between items-center font-Proxima-Nova text-[16px]">
                                    <span className='font-bold text-light-gray'>Metode Pembayaran</span>
                                    <div className='font-extrabold text-title text-end'>Virtual Account</div>
                                </div>
                                <div className="flex flex-row mb-6 justify-between items-center font-Proxima-Nova text-[16px]">
                                    <span className='font-bold text-light-gray'>Status</span>
                                    <div className='font-extrabold text-title text-end'>Terbayar</div>
                                </div>
                                <button className='mt-10 w-full text-[18pt] rounded-md py-3 text-white bg-title font-extrabold font-Proxima-Nova' style={{ boxShadow: '0px 16px 24px rgba(29, 51, 79, 0.24)' }}>
                                    Back to Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <DividerNotif />

                <Footer themeGrid={theme}/>
            </div>
        </>
    );
}
