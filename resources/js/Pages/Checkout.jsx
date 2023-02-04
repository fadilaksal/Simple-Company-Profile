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
import { FaArrowRight, FaBell, FaCalendar, FaCartArrowDown, FaChevronRight, FaClock, FaCog, FaEnvelopeOpen, FaFacebook, FaFax, FaHamburger, FaHospital, FaInstagram, FaLocationArrow, FaMapPin, FaMinus, FaPhone, FaPlus, FaSearch, FaShoppingCart, FaSlidersH, FaStar, FaTimesCircle, FaTrash, FaTrashAlt, FaTwitter } from 'react-icons/fa';

export default function Checkout(props) {
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
            <Head title="Checkout" />
            <div className="relative min-h-screen text-title bg-[#F5F8FA] dark:bg-gray-900 sm:items-center sm:pt-0 font-Gilroy-Light">
                <Navbar props={props} themeGrid={theme}/>
                
                <div className='px-6 py-10 md:px-24'>
                    <div className=''>
                        <Breadcrumbs aria-label="breadcrumb" separator={<FaChevronRight  className={'text-light-gray mt-4'}/>}>
                            <Link underline="hover" href="#" className={' block mt-4 mr-5 font-Gilroy-ExtraBold text-light-gray'}>
                                Katalog
                            </Link>
                            <Link underline="hover" href="#" className={' block mt-4 mr-5 ml-5 font-Gilroy-ExtraBold text-light-gray'}>
                                Product
                            </Link>
                            <span className={' block mt-4 mr-5 ml-5 font-Gilroy-ExtraBold text-title'}>
                                Checkout
                            </span>
                        </Breadcrumbs>
                    </div>

                    <div className='mt-10'>
                        <Grid container spacing={10}>
                            <Grid theme={theme} item lg={8} sm={12}>
                                <div className='px-12 py-10 rounded-xl bg-white'>
                                    <h2 className='font-Gilroy-ExtraBold text-[16pt] font-bold text-title'>Daftar Pesanan</h2>
                                    
                                    <div className='flex flex-row mt-10 items-center'>
                                        <div className='mr-5'>
                                            <Checkbox 
                                                aria-label='checkbox'
                                                defaultChecked
                                                sx={{
                                                    color: '#002060',
                                                    '&.Mui-checked': {
                                                        color: '#002060',
                                                    },
                                                }}
                                            />
                                        </div>

                                        <div className='text-title font-bold w-[150px]'>Pilih Semua</div>

                                        <div className='text-light-gray font-bold grow text-end'>Hapus Semua</div>
                                    </div>

                                    <hr className='mt-6 border-light-gray' />

                                    <div className='flex flex-col md:flex-row mt-10 items-start'>
                                        <div className=''>
                                            <Checkbox 
                                                aria-label='checkbox'
                                                defaultChecked
                                                sx={{
                                                    color: '#002060',
                                                    '&.Mui-checked': {
                                                        color: '#002060',
                                                    },
                                                }}
                                            />
                                        </div>

                                        <div className='text-title font-bold w-[150px] mr-5'>
                                            <img src='/assets/images/product/image.png' className='w-full'/>
                                        </div>

                                        <div className='font-Proxima-Nova mr-2'>
                                            <h4 className='text-[12pt] text-gray'>Alat Kesehatan</h4>
                                            <h3 className='text-[22pt] font-bold text-title'>Mikroskop Penelitian</h3>
                                            <div className='text-orange-400 mt-2 text-[18pt] font-extrabold mr-6'>Rp. 100.000</div>
                                            <div className='flex flex-row justify-between mt-8 font-Proxima-Nova items-start'>
                                                <span className='text-light-gray text-[16px]'>Tanggal Pengambilan</span>
                                                <span className='text-title font-bold text-[14px]'>Ubah</span>
                                            </div>
                                            <div className='flex flex-row mt-2 font-Proxima-Nova items-center'>
                                                <FaCalendar className='mr-4'/>
                                                <span className='text-title font-bold text-[16px]'>Jum’at, 5 Maret 2021</span>
                                            </div>
                                            <div className='flex flex-row justify-between mt-4 font-Proxima-Nova items-start'>
                                                <span className='text-light-gray text-[16px]'>Ini adalah catatan, tolong mikroskopnya yang original ya, jangan lupa steril juga.</span>
                                                <span className='text-title font-bold text-[14px]'>Ubah</span>
                                            </div>
                                        </div>

                                        <div className='text-gray align-bottom w-[240px] grow mt-4 md:mt-auto text-start md:text-end'>
                                            <span className='text-[14px]'>Jumlah Pembelian</span>
                                            
                                            <div className="flex flex-row items-center justify-start">
                                                <button className='rounded-full mr-8 text-light-gray'>
                                                    <FaTrash className='text-[22px]' />
                                                </button>
                                                <button className='rounded-full mr-4  p-1 bg-light-gray text-white'>
                                                    <FaMinus />
                                                </button>
                                                <span className='font-Gilroy-ExtraBold text-[24px] mr-4 font-extrabold text-title'>
                                                    2
                                                </span>
                                                <button className='rounded-full p-1 bg-title text-white'>
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='mt-6 border-light-gray' />

                                    <div className='flex flex-col md:flex-row mt-10 items-start'>
                                        <div className=''>
                                            <Checkbox 
                                                aria-label='checkbox'
                                                defaultChecked
                                                sx={{
                                                    color: '#002060',
                                                    '&.Mui-checked': {
                                                        color: '#002060',
                                                    },
                                                }}
                                            />
                                        </div>

                                        <div className='text-title font-bold w-[150px] mr-5'>
                                            <img src='/assets/images/product/rs.png' className='w-full'/>
                                        </div>

                                        <div className='font-Proxima-Nova mr-2'>
                                            <h4 className='text-[12pt] text-gray'>Layanan Kesehatan</h4>
                                            <h3 className='text-[22pt] font-bold text-title'>PCR Swab Test (Drive Thru) Hasil 1 Hari Kerja</h3>
                                            <div className='text-orange-400 mt-2 text-[18pt] font-extrabold mr-6'>Rp. 1.400.000</div>
                                            <div className='flex flex-row justify-between mt-8 font-Proxima-Nova items-start'>
                                                <span className='text-light-gray text-[16px]'>Tanggal Pengambilan</span>
                                                <span className='text-title font-bold text-[14px]'>Ubah</span>
                                            </div>
                                            <div className='flex flex-row mt-2 font-Proxima-Nova items-center'>
                                                <FaCalendar className='mr-4'/>
                                                <span className='text-title font-bold text-[16px]'>Jum’at, 5 Maret 2021</span>
                                            </div>
                                            <div className='flex flex-row justify-between mt-8 font-Proxima-Nova items-start'>
                                                <span className='text-light-gray text-[16px]'>Waktu Pemeriksaan</span>
                                                <span className='text-title font-bold text-[14px]'>Ubah</span>
                                            </div>
                                            <div className='flex flex-row mt-2 font-Proxima-Nova items-center'>
                                                <FaClock className='mr-4'/>
                                                <span className='text-title font-bold text-[16px]'>14:00 WIB</span>
                                            </div>
                                        </div>

                                        <div className='text-gray align-bottom w-[240px] grow mt-4 md:mt-auto text-start md:text-end'>
                                            <span className='text-[14px]'>Jumlah Pembelian</span>
                                            
                                            <div className="flex flex-row items-center justify-start">
                                                <button className='rounded-full mr-8 text-light-gray'>
                                                    <FaTrash className='text-[22px]' />
                                                </button>
                                                <span className='font-Gilroy-ExtraBold text-[24px] mr-4 font-extrabold text-title'>
                                                    1 X
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>

                            <Grid theme={theme} item lg={4} sm={12}>
                                <div className='px-12 py-10 rounded-xl bg-white'>
                                    <h2 className='font-Gilroy-ExtraBold text-[16pt] font-bold text-title'>Ringkasan Pembelanjaan</h2>
                                    <div className='mt-8'>
                                        <div className="flex flex-row justify-between items-center text-gray mt-4">
                                            <span className='text-[14px] font-Gilroy-Light'>Mikroskop</span>
                                            <span className='font-extrabold font-Proxima-Nova'>Rp. 100.000</span>
                                        </div>
                                        <div className="flex flex-row justify-between items-center text-gray mt-4">
                                            <span className='text-[14px] font-Gilroy-Light'>PCR Swab Test</span>
                                            <span className='font-extrabold font-Proxima-Nova'>Rp. 1.400.000</span>
                                        </div>
                                    </div>

                                    <hr className='mt-8 border-light-gray' />

                                    <div className='mt-4 flex flex-row justify-between items-center'>
                                        <span className='font-Gilroy-ExtraBold text-[16px] text-title'>
                                            Total Harga
                                        </span>
                                        <span className='font-Proxima-Nova text-[24px] font-extrabold text-orange-400'>
                                            Rp. 1.500.000
                                        </span>
                                    </div>

                                    <div className='mt-10'>
                                        <span className='font-Gilroy-ExtraBold text-[16px] text-title'>
                                            Metode Pembayaran
                                        </span>
                                        <div className='flex flex-row mt-4 text-gray items-center'>
                                            <div className='grow-0 w-[75px] mr-2'>
                                                <img src="/assets/images/bank/bni.png" alt="" />
                                            </div>
                                            <div className='grow-0 text-[16px] font-Proxima-Nova font-bold'>Virtual Account</div>
                                            <div className='grow text-end'>
                                                <FaChevronRight className='inline'/>
                                            </div>
                                        </div>
                                    </div>

                                    <button className='mt-10 w-full rounded-xl py-3 text-white bg-title font-extrabold font-Gilroy-ExtraBold' style={{ boxShadow: '0px 16px 24px rgba(29, 51, 79, 0.24)' }}>
                                        Bayar Sekarang
                                    </button>

                                </div>
                            </Grid>
                        </Grid>

                        <div className='mt-8'>
                            <h1 className='font-Gilroy-ExtraBold font-bold text-[20pt] text-title'>Rekomendasi untuk anda</h1>

                            <div className='mt-8'>
                                <Grid container spacing={8} className={'mb-2 py-4'}>
                                    <Grid theme={theme} item lg={6} md={12} xs={12} className={'relative font-Proxima-Nova text-[16px] font-bold'}>
                                        <CardLayanan src='/assets/images/welcome-layanan-1.png' 
                                            title='PCR Swab Test (Drive Thru) - Hasil 1 Hari Kerja' 
                                            price='1.400.000'
                                            hospital='Unicare Drive Thru Central Parkir Kuta'
                                            location='Kuta, Kabupaten Badung'/>
                                    </Grid>
                                    <Grid theme={theme} item lg={6} md={12} xs={12} className={''}>
                                        <CardLayanan src='/assets/images/welcome-layanan-2.png' 
                                            title='PCR Swab Test (Drive Thru) - Hasil 1 Hari Kerja' 
                                            price='1.400.000'
                                            hospital='Unicare Drive Thru Central Parkir Kuta'
                                            location='Kuta, Kabupaten Badung'/>
                                    </Grid>
                                </Grid>
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
