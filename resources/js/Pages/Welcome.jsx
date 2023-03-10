import CardLayanan from '@/Components/Frontpage/CardLayanan';
import DividerNotif from '@/Components/Frontpage/DividerNotif';
import { Footer } from '@/Components/Frontpage/Footer';
import Navbar from '@/Components/Frontpage/Navbar';
import ProductCard from '@/Components/Frontpage/Product/ProductCard';
import { ProductListCard } from '@/Components/Frontpage/Product/ProductListCard';
import MenuBurger from '@/Components/MenuBurger';
import PresentedLogo from '@/Components/PresentedLogo';
import { Link, Head } from '@inertiajs/inertia-react';
import { Button, createTheme, Grid, Menu, MenuItem, OutlinedInput } from '@mui/material';
import { FaArrowRight, FaBell, FaCartArrowDown, FaCog, FaEnvelopeOpen, FaFacebook, FaFax, FaHamburger, FaHospital, FaInstagram, FaLocationArrow, FaMapPin, FaPhone, FaSearch, FaShoppingCart, FaSlidersH, FaStar, FaTwitter } from 'react-icons/fa';

export default function Welcome(props) {
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
            <Head title="Welcome" />
            <div className="relative min-h-screen text-title bg-[#F5F8FA] dark:bg-gray-900 sm:items-center sm:pt-0 font-Gilroy-Light">
                <Navbar props={props} themeGrid={theme}/>

                <div className="py-6 px-10 ">
                    <Grid container spacing={6} className={'mb-2 py-4'}>
                        <Grid theme={theme} item lg={7} xs={12} className={'relative'}>
                            <div className='rounded-xl bg-white' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                <div className='p-4 md:p-0'>
                                    <img src="/assets/images/welcome-card-1.png" alt="" className='w-[250px] md:absolute md:top-5 md:right-0 z-30' />
                                </div>
                                <div className='flex flex-row '>
                                    <div className='grow px-6 py-4 md:py-8 md:px-12'>
                                        <h2 className='font-Gilroy-ExtraBold text-[28px]'>Solusi, Kesehatan Anda</h2>
                                        <p className='font-Proxima-Nova text-[18px] mt-4 max-w-64 text-[#597393]'>Update informasi seputar kesehatan semua bisa disini !</p>
                                        <button className='px-10 py-3 bg-title text-white font-Gilroy-ExtraBold rounded-xl mt-4'>
                                            Selengkapnya
                                        </button>
                                    </div>
                                    <div className='flex-none w-52 relative z-0 overflow-hidden rounded-xl hidden md:flex'>
                                        <img src="/assets/images/welcome-card-blur.png" alt="" className='h-[800px] hidden md:flex md:absolute  -top-5 right-0 z-20' />
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid theme={theme} item lg={5} xs={12} className={'relative'}>
                            <div className='rounded-xl bg-white' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                <div className='p-4 md:p-0'>
                                    <img src="/assets/images/welcome-card-2.png" alt="" className='w-[160px] m-auto md:w-[240px] md:absolute top-5 right-5 z-50' />
                                </div>
                                <div className='flex flex-row '>
                                    <div className='grow px-8 py-4 md:py-8 md:px-12'>
                                        <h2 className='font-Gilroy-ExtraBold text-[24px]'>Layanan Khusus</h2>
                                        <p className='font-Proxima-Nova text-[15px] mt-4 w-[200px] text-[#597393]'>Tes Covid 19, Cegah Corona Sedini Mungkin !</p>
                                        <button className='py-3  text-title font-Gilroy-ExtraBold rounded-xl mt-4'>
                                            Daftar Tes <FaArrowRight className='ml-4 inline'/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                    <div className='p-8 mt-8 bg-white rounded-xl relative' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                        <img src="/assets/images/welcome-search-icon.png" alt="" className='w-[160px] md:absolute left-10 -top-5'/>
                        <div className='flex flex-col md:flex-row justify-between items-center '>
                            <div className="md:ml-[180px] items-center">
                                <h2 className='font-Gilroy-ExtraBold text-[22px]'>
                                    Track Pemeriksaan
                                </h2> 
                                <p className='font-Proxima-Nova text-[14px] mt-2'>
                                Kamu dapat mengecek progress pemeriksaanmu disini 
                                </p>
                            </div>
                            <div className='items-center'>
                                <button className='py-3 pr-5 text-title font-Gilroy-ExtraBold rounded-xl mt-4'>
                                    Track <FaArrowRight className='ml-2 inline'/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='py-8 mt-8 flex flex-col md:flex-row justify-between items-center'>
                        <div className="mt-8">
                            <button className='mt-3 px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                All Product
                            </button>
                            <button className='mt-3 px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                Layanan Kesehatan
                            </button>
                            <button className='mt-3 px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                Alat Kesehatan
                            </button>
                        </div>
                        <div className='items-center flex flex-row mt-8'>
                            <button className='p-4 mr-6 text-title bg-white rounded-full'
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                <FaSlidersH />
                            </button>
                            <div className='relative'>
                                <input type={'text'} 
                                    className={'border-0 rounded-full w-[200px] md:w-[400px] px-6 py-4'}
                                    placeholder={'Search ...'} />
                                <FaSearch className='absolute right-8 top-5'/>
                            </div>
                        </div>
                    </div>
                        
                    <div className={'mt-6'}>
                        <ProductListCard productCount={8} />
                        
                        <div className='text-center'>
                            <button className='px-24 py-3 bg-title text-white font-Gilroy-ExtraBold rounded-xl mt-16 mx-auto'>
                                Lihat Lainnya
                            </button>
                        </div>
                    </div>

                    <div className="mt-20">
                        <div className=''>
                            <h1 className='font-Gilroy-ExtraBold text-[30px]'>Pilih Tipe Layanan Kesehatan Anda</h1>
                            <div className='mt-10 w-fit p-2 bg-white rounded-full font-bold'>
                                <button className='py-1 px-2 bg-green-400 text-title text-[16px] font-Proxima-Nova rounded-full mr-2'>
                                    Satuan
                                </button>
                                <button className='py-1 px-2 bg-white text-title text-[16px] font-Proxima-Nova rounded-full'>
                                    Paket Pemeriksaan
                                </button>
                            </div>
                        </div>

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
                
                <DividerNotif />

                <Footer themeGrid={theme}/>
            </div>
        </>
    );
}
