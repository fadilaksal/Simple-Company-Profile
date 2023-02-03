import { Link, Head } from '@inertiajs/inertia-react';
import { createTheme, Grid, OutlinedInput } from '@mui/material';
import { FaArrowRight, FaBell, FaCartArrowDown, FaCog, FaEnvelopeOpen, FaFacebook, FaFax, FaHospital, FaInstagram, FaLocationArrow, FaMapPin, FaPhone, FaSearch, FaShoppingCart, FaSlidersH, FaStar, FaTwitter } from 'react-icons/fa';

export default function Welcome(props) {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 640,
                md: 760,
                lg: 1024,
                xl: 1536,
            },
        },
    });

    const ProductList = () => {
        const products = [];

        for (let index = 0; index < 8; index++) {
            products.push(<Grid theme={theme} item md={3} xs={6} key={'product-' + index}>
                                <div className='bg-white rounded-xl p-6 relative font-Proxima-Nova'
                                    style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                    <div className="absolute top-7 right-7">
                                        <FaStar className='inline text-orange-300'/> 5
                                    </div>
                                    <img src="./assets/images/welcome-product.png" alt="image-product" className='m-auto w-[200px]' />
                                    <h3 className='text-[20px] font-extrabold mt-5'>Suntik Steril</h3>
                                    <div className='flex flex-row mt-1 justify-between items-center'>
                                        <span className='text-orange-600 font-extrabold'>Rp. 10.000</span>
                                        <span className='bg-green-200 text-[10pt] text-green-800 py-1 px-2 rounded-xl'>Ready Stok</span>
                                    </div>
                                </div>
                        </Grid>)
        }

        return (<Grid container spacing={6}>{products}</Grid>)
    }


    return (
        <>
            <Head title="Welcome" />
            <div className="relative min-h-screen text-title bg-[#F5F8FA] dark:bg-gray-900 sm:items-center sm:pt-0 font-Gilroy-Light">
                <Grid container spacing={2} className={'mb-2 bg-white py-8'} style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                    <Grid theme={theme} item md={4} xs={12}>

                    </Grid>
                    <Grid theme={theme} item md={4} xs={12} className={'text-center items-center font-[600]'}>
                        Download | Ikuti kami di
                        <FaFacebook className='inline ml-3'/>
                        <FaInstagram className='inline ml-3'/>
                        <FaTwitter className='inline ml-3'/>
                    </Grid>
                    <Grid theme={theme} item md={4} xs={12}>
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

                <div className="py-6 px-20">
                    <Grid container spacing={6} className={'mb-2 py-4'}>
                        <Grid theme={theme} item md={7} xs={12} className={'relative'}>
                            <div className=' flex flex-row rounded-xl bg-white' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                <div className='grow px-12 py-8'>
                                    <h2 className='font-Gilroy-ExtraBold text-[28px]'>Solusi, Kesehatan Anda</h2>
                                    <p className='font-Proxima-Nova text-[18px] mt-4 max-w-64 text-[#597393]'>Update informasi seputar kesehatan semua bisa disini !</p>
                                    <button className='px-10 py-3 bg-title text-white font-Gilroy-ExtraBold rounded-xl mt-4'>
                                        Selengkapnya
                                    </button>
                                </div>
                                <img src="./assets/images/welcome-card-1.png" alt="" className='w-[250px] absolute top-5 right-0 z-50' />
                                <div className='flex-none w-52 relative z-0 overflow-hidden rounded-xl'>
                                    <img src="./assets/images/welcome-card-blur.png" alt="" className='h-[800px] absolute -top-5 right-0 z-20' />
                                </div>
                            </div>
                        </Grid>
                        <Grid theme={theme} item md={5} xs={12} className={'relative'}>
                            <div className=' flex flex-row rounded-xl bg-white' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                <div className='grow px-12 py-8'>
                                    <h2 className='font-Gilroy-ExtraBold text-[24px]'>Layanan Khusus</h2>
                                    <p className='font-Proxima-Nova text-[15px] mt-4 w-[200px] text-[#597393]'>Tes Covid 19, Cegah Corona Sedini Mungkin !</p>
                                    <button className='py-3  text-title font-Gilroy-ExtraBold rounded-xl mt-4'>
                                        Daftar Tes <FaArrowRight className='ml-4 inline'/>
                                    </button>
                                </div>
                                <img src="./assets/images/welcome-card-2.png" alt="" className='w-[240px] absolute top-5 right-5 z-50' />
                                <div className='flex-none w-52 relative z-0 overflow-hidden rounded-xl'>
                                    
                                </div>
                            </div>
                        </Grid>
                    </Grid>

                    <div className='p-8 mt-8 bg-white rounded-xl flex flex-row justify-between items-center relative' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                        <img src="./assets/images/welcome-search-icon.png" alt="" className='w-[160px] absolute left-10 -top-5'/>
                        <div className="ml-[220px]">
                            <h2 className='font-Gilroy-ExtraBold text-[22px]'>
                                Track Pemeriksaan
                            </h2> 
                            <p className='font-Proxima-Nova text-[14px] mt-2'>
                               Kamu dapat mengecek progress pemeriksaanmu disini 
                            </p>
                        </div>
                        <div className='items-center'>
                            <button className='py-3 pr-10 text-title font-Gilroy-ExtraBold rounded-xl mt-4'>
                                Track <FaArrowRight className='ml-2 inline'/>
                            </button>
                        </div>
                    </div>

                    <div className='py-8 mt-8 flex flex-row justify-between items-center'>
                        <div className="">
                            <button className='px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                All Product
                            </button>
                            <button className='px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                Layanan Kesehatan
                            </button>
                            <button className='px-5 py-2 mr-8 bg-white text-title font-Proxima-Nova font-[800] rounded-3xl hover:bg-title hover:text-white' 
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                Alat Kesehatan
                            </button>
                        </div>
                        <div className='items-center flex flex-row'>
                            <button className='p-4 mr-6 text-title bg-white rounded-full'
                                style={{boxShadow: '0px 16px 24px rgba(0, 32, 96, 0.24)'}}>
                                <FaSlidersH />
                            </button>
                            <div className='relative'>
                                <input type={'text'} 
                                    className={'border-0 rounded-full w-[400px] px-6 py-4'}
                                    placeholder={'Search ...'} />
                                <FaSearch className='absolute right-8 top-5'/>
                            </div>
                        </div>
                    </div>
                        
                    <div className={'mt-6'}>
                        <ProductList />
                        <div className='text-center'>

                        <button className='px-32 py-3 bg-title text-white font-Gilroy-ExtraBold rounded-xl mt-16 mx-auto'>
                            Lihat Lainnya
                        </button>
                        </div>
                    </div>

                    <div className='mt-20'>
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

                    <div className="mt-10">
                        <Grid container spacing={12} className={'mb-2 py-4'}>
                            <Grid theme={theme} item md={6} xs={12} className={'relative font-Proxima-Nova text-[16px] font-bold'}>
                                <div className=' flex flex-row rounded-xl bg-white' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                    <div className='grow px-12 py-8 items-center'>
                                        <h2 className=''>PCR Swab Test (Drive Thru) - Hasil 1 Hari Kerja</h2>
                                        <p className='mt-1 text-orange-500'>Rp. 1.400.000</p>
                                        <p className='mt-3'><FaHospital className='inline mr-2' />Unicare Drive Thru Central Parkir Kuta </p>
                                        <p className='mt-1 font-normal text-[14px] text-[#BEBEBE]'><FaMapPin className='inline mr-2 text-title' />Kuta, Kabupaten Badung</p>
                                    </div>
                                    <div className='flex-none w-40 z-0 rounded-xl relative'>
                                        <img src="./assets/images/welcome-layanan-1.png" alt="" className='w-[300px] absolute top-8 -right-16 z-50' />
                                    </div>
                                </div>
                            </Grid>
                            <Grid theme={theme} item md={6} xs={12} className={'relative font-Proxima-Nova text-[16px] font-bold'}>
                                <div className=' flex flex-row rounded-xl bg-white' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                    <div className='grow px-12 py-8 items-center'>
                                        <h2 className=''>PCR Swab Test (Drive Thru) - Hasil 1 Hari Kerja</h2>
                                        <p className='mt-1 text-orange-500'>Rp. 1.400.000</p>
                                        <p className='mt-3'><FaHospital className='inline mr-2' />Unicare Drive Thru Central Parkir Kuta </p>
                                        <p className='mt-1 font-normal text-[14px] text-[#BEBEBE]'><FaMapPin className='inline mr-2 text-title' />Kuta, Kabupaten Badung</p>
                                    </div>
                                    <div className='flex-none w-40 z-0 rounded-xl relative'>
                                        <img src="./assets/images/welcome-layanan-2.png" alt="" className='w-[300px] absolute top-8 -right-16 z-50' />
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="px-24 py-16 bg-title font-Gilroy-ExtraBold text-[30px] text-white relative">
                    <h1>Ingin mendapat update dari kami ?</h1>
                    <img src="./assets/images/welcome-ornament.png" className='absolute left-0 -top-5 h-[200px]'/>
                </div>


                <div className="mt-10 pb-10">
                    <Grid container spacing={12} className={'pt-10 px-20 text-light-gray'}>
                        <Grid theme={theme} item md={4} xs={12} className={'relative font-Proxima-Nova text-[16px] font-bold'}>
                            <p>Dipersembahkan Oleh</p>
                            <img src="./assets/images/welcome-footer-logo.png" alt="" className='mt-2'/>
                            <p className='text-[18px] text-title mt-8 font-Gilroy-Light font-bold'>
                                Ikuti kami di
                                    <FaFacebook className='inline ml-3'/>
                                    <FaInstagram className='inline ml-3'/>
                                    <FaTwitter className='inline ml-3'/>
                            </p>
                        </Grid>
                        <Grid theme={theme} item md={4} xs={12} className={' font-Proxima-Nova text-[16px]'}>
                            <p className='text-[20px] text-title font-Gilroy-Light font-extrabold'>
                                Hubungi Kami di
                            </p>
                            <hr className='h-[4px] bg-title w-[100px] mt-4' />
                            <p className='text-[16px] mt-8 font-Proxima-Nova text-light-gray'>
                                <FaPhone className='inline mr-3'/> 031-5020306, 031-5021451
                            </p>
                            <p className='text-[16px] mt-2 font-Proxima-Nova text-light-gray'>
                                <FaFax className='inline mr-3'/> 031-5020388
                            </p>
                            <p className='text-[16px] mt-2 font-Proxima-Nova text-light-gray'>
                                <FaEnvelopeOpen className='inline mr-3'/> bblksub@yahoo.co.id
                            </p>
                        </Grid>
                        <Grid theme={theme} item md={4} xs={12} className={' font-Proxima-Nova text-[16px] text-end'}>
                            <img src="./assets/images/welcome-footer-googleplay.png" alt="" className='ml-auto' />
                            <p className='text-[18px] mt-2 font-Proxima-Nova text-light-gray font-bold'>
                                <span className='mr-10'>FAQ</span> <span>Term and Conditions</span>
                            </p>
                            <p className='text-[16px] mt-4 font-Proxima-Nova text-gray font-bold'>
                                Copyright © 2021. BBLK Surabaya. All Right Reserved.
                            </p>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    );
}
