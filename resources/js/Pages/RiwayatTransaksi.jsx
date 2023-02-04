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

export default function RiwayatTransaksi(props) {
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
            <Head title="Riwayat Transaksi" />
            <div className="relative min-h-screen text-title bg-[#F5F8FA] dark:bg-gray-900 sm:items-center sm:pt-0 font-Gilroy-Light">
                <Navbar props={props} themeGrid={theme}/>
                
                <div className='px-6 py-10 md:px-24 font-Proxima-Nova'>

                    <div>
                        <ul className='p-0 rounded-xl bg-white md:rounded-full w-fit' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                            <li className='py-2 px-8 m-1 rounded-full block md:inline-block bg-white hover:bg-aqua hover:font-bold'>Profil Saya</li>
                            <li className='py-2 px-8 m-1 rounded-full block md:inline-block bg-white hover:bg-aqua hover:font-bold'>Pengaturan</li>
                            <li className='py-2 px-8 m-1 rounded-full block md:inline-block bg-aqua font-bold'>Riwayat Transaksi</li>
                        </ul>
                    </div>

                    <div className='my-10'>
                        <div className='m-auto rounded-[24px] bg-white'>
                            <div className='bg-title rounded-[24px] pt-10'>
                                <div className="flex flex-row px-20 ">
                                    <div className="bg-white rounded-full w-[50px] h-[50px] p-[2px] mr-4">
                                        <img src="/assets/images/img-profil.png" alt="" className='w-full rounded-full' />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className='text-[20px] text-white font-Gilroy-Light'><b>Angga</b> Praja</h2>
                                        <p className='text-light-gray'>Membership BBLK</p>
                                    </div>
                                </div>

                                <div className='mt-8 text-white font-bold bg-[#1A3E78] px-20 py-5 rounded-[24px]'>
                                    Anda mempunyai total 21 pesanan
                                </div>
                            </div>

                            <div className='px-4 md:px-20 py-10'>
                                <div className="flex flex-col md:flex-row items-start">
                                    <div className='mr-10 flex flex-col items-start'>
                                        <button className='mb-5 px-5 py-2 mr-8 bg-title text-white font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                            style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                            Semua Pesanan
                                        </button>
                                        <button className='mb-5 px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                            style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                            Pemeriksaan
                                        </button>
                                        <button className='mb-5 px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                            style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                            Produk
                                        </button>
                                    </div>

                                    <div className='flex flex-col grow'>
                                        <div className='px-8 py-5 mb-5 rounded-xl font-Proxima-Nova '
                                            style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>

                                            <div className="flex flex-col md:flex-row text-gray">
                                                <div className='mr-2 mt-2 w-fit text-[14px]  font-extrabold'>No. 109A9S92102</div>
                                                <div className='mr-2 mt-2 w-fit px-1 text-[12px] bg-green-300 text-green-600 rounded-xl'>menunggu barang ready</div>
                                                <div className='mr-2 mt-2 w-fit px-1 text-[12px] '>12 Maret 2021 11:02</div>
                                            </div>

                                            <div className="flex flex-col md:flex-row mt-4 justify-between">
                                                <div className="flex flex-col mt-4 md:grow w-full">
                                                    <div className='flex flex-row items-center mb-4'>
                                                        <div className='w-[50px] h-[50px] bg-[#F2F2F2] rounded-full p-2 mr-4'>
                                                            <img src="/assets/images/product/image.png" alt="" className='w-full' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <span className='font-bold'>Suntik Steril</span>
                                                            <span className='font-bold text-orange-500 text-[14px]'>RP. 10000</span>
                                                        </div>
                                                        <div className='ml-auto'>
                                                            <span className='bg-green-200 text-green-600 text-[12px] rounded-md p-1'>1x</span>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-row items-center mb-4'>
                                                        <div className='w-[50px] h-[50px] bg-[#F2F2F2] rounded-full p-2 mr-4'>
                                                            <img src="/assets/images/product/image.png" alt="" className='w-full' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <span className='font-bold'>Suntik Steril</span>
                                                            <span className='font-bold text-orange-500 text-[14px]'>RP. 10000</span>
                                                        </div>
                                                        <div className='ml-auto'>
                                                            <span className='bg-green-200 text-green-600 text-[12px] rounded-md p-1'>1x</span>
                                                        </div>
                                                    </div>
                                                    <button className='w-full rounded-full bg-[#F2F2F2] font-bold text-[16px] py-2'>
                                                        +2 Item
                                                    </button>
                                                </div>
                                                
                                                <div className='border-l-2 mt-4 mx-5 w-[20px] border-light-gray'></div>

                                                <div className='text-left mt-4 my-auto w-[200px]'>
                                                    <span className='text-gray text-[12px]'>Total Harga</span>
                                                    <h3 className='text-title font-extrabold text-[24px]'>Rp. 1.520.000</h3>
                                                </div>
                                            </div>
                                            <div className='mt-10 text-center font-Gilroy-ExtraBold'>
                                                Lihat Detail <FaArrowRight className='inline-block ml-2'/>
                                            </div>
                                        </div>
                                        <div className='px-8 py-5 mb-5 rounded-xl font-Proxima-Nova '
                                            style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>

                                            <div className="flex flex-col md:flex-row text-gray">
                                                <div className='mr-2 mt-2 w-fit text-[14px]  font-extrabold'>No. 109A9S92102</div>
                                                <div className='mr-2 mt-2 w-fit px-1 text-[12px] bg-green-300 text-green-600 rounded-xl'>menunggu barang ready</div>
                                                <div className='mr-2 mt-2 w-fit px-1 text-[12px] '>12 Maret 2021 11:02</div>
                                            </div>

                                            <div className="flex flex-col md:flex-row mt-4 justify-between">
                                                <div className="flex flex-col mt-4 grow">
                                                    <div className='flex flex-col md:flex-row items-center mb-4'>
                                                        <div className='w-[50px] h-[50px] mr-4'>
                                                            <img src="/assets/images/welcome-layanan-1.png" alt="" className='w-full' />
                                                        </div>
                                                        <div className='flex flex-col'>
                                                            <span className='font-bold'>PCR Swab Test (Drive Thru) - Hasil 1 Hari Kerja</span>
                                                            <span className='font-bold text-orange-500 text-[14px]'>RP. 10000</span>
                                                            <span className='text-[14px] mt-2 items-center'>
                                                                <FaHospital className='inline mr-2' />
                                                                <span className='text-light-gray'>Unicare Drive Thru Central Parkir Kuta </span>
                                                            </span>
                                                        </div>
                                                        <div className='ml-auto'>
                                                            <span className='bg-green-200 text-green-600 text-[12px] rounded-md p-1'>1x</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <button className='w-full rounded-full bg-[#F2F2F2] font-bold text-[16px] py-2'>
                                                        +2 Item
                                                    </button>
                                                </div>
                                                
                                                <div className='border-l-2 mt-4 mx-5 w-[20px] border-light-gray'></div>

                                                <div className='text-left mt-4 my-auto w-[200px]'>
                                                    <span className='text-gray text-[12px]'>Total Harga</span>
                                                    <h3 className='text-title font-extrabold text-[24px]'>Rp. 1.520.000</h3>
                                                </div>
                                            </div>
                                            <div className='mt-10 text-center font-Gilroy-ExtraBold'>
                                                Lihat Detail <FaArrowRight className='inline-block ml-2'/>
                                            </div>
                                        </div>

                                        <button className='mx-auto rounded-md border-[1px] border-light-gray text-light-gray font-bold text-[14px] py-2 px-8 w-fit'>
                                            Load More
                                        </button>
                                    </div>
                                </div>
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
