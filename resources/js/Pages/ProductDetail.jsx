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
import { Breadcrumbs, Button, createTheme, Grid, Menu, MenuItem, OutlinedInput, Typography } from '@mui/material';
import { FaArrowRight, FaBell, FaCartArrowDown, FaChevronRight, FaCog, FaEnvelopeOpen, FaFacebook, FaFax, FaHamburger, FaHospital, FaInstagram, FaLocationArrow, FaMapPin, FaMinus, FaPhone, FaPlus, FaSearch, FaShoppingCart, FaSlidersH, FaStar, FaTwitter } from 'react-icons/fa';

export default function ProductDetail(props) {
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
            <Head title="Detail Product" />
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
                            <span className={' block mt-4 mr-5 ml-5 font-Gilroy-ExtraBold text-title'}>Breadcrumbs</span>
                        </Breadcrumbs>
                    </div>

                    <div className='mt-10'>
                        <Grid container spacing={10}>
                            <Grid theme={theme} item lg={8} sm={12}>
                                <div className='px-10 md:px-16 py-14 rounded-xl bg-white'>
                                    <Grid container spacing={2}>
                                        <Grid theme={theme} item md={4} sm={12}>
                                            <img src="/assets/images/welcome-product.png" alt="product-main" className={'mx-auto w-full'} />
                                            <div className="flex flex-row mt-6">
                                                <ImageTile imageUrl={'/assets/images/product/image-tile.png'} />
                                                <ImageTile imageUrl={'/assets/images/product/image-tile.png'} />
                                                <ImageTile imageUrl={'/assets/images/product/image-tile.png'} />
                                                <div className="flex flex-col font-Proxima-Nova justify-center">
                                                    <span className='font-bold'>+10</span>
                                                    <span className='text-[6pt] text-light-gray font-bold'>Foto Lainnya</span>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid theme={theme} item md={8} sm={12} className={'font-Proxima-Nova'}>
                                            <h4 className='text-[12pt] text-gray'>Alat Kesehatan</h4>
                                            <h3 className='text-[20pt] font-bold text-title'>Mikroskop Penelitian</h3>
                                            <div className='flex flex-row mt-2 items-center'>
                                                <span className='text-light-gray text-[10pt] mr-6'>20 Terjual</span>
                                                <span className='text-light-gray text-[10pt]'><FaStar className='text-orange-200 inline mr-1' /> 5 (49 Ulasan)</span>
                                            </div>
                                            <div className='flex flex-row mt-2 items-center justify-between'>
                                                <span className='text-orange-600 text-[18pt] font-extrabold mt-4 mr-6'>Rp. 100.000</span>
                                                <div className='bg-green-200 text-green-700 text-[8pt] rounded-lg px-1'>Ready Stok</div>
                                            </div>
                                        </Grid>

                                        <div className='mt-10 text-[18px] font-Proxima-Nova'>
                                            <ul className='p-1 rounded-md md:rounded-full w-fit' style={{boxShadow: '0px 16px 24px rgba(190, 190, 190, 0.16)'}}>
                                                <li className='py-2 px-8 m-1 rounded-full inline-block bg-aqua font-bold'>Deskripsi</li>
                                                <li className='py-2 px-8 m-1 rounded-full inline-block bg-white hover:bg-aqua hover:font-bold'>Info Penting</li>
                                                <li className='py-2 px-8 m-1 rounded-full inline-block bg-white hover:bg-aqua hover:font-bold'>Ulasan</li>
                                            </ul>

                                            <p className='text-[#6A6A6A] text-[18px] mt-12'>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacinia tincidunt suspendisse feugiat tempus curabitur. Auctor phasellus id morbi justo, in netus. Tortor adipiscing at volutpat justo aliquam in. Molestie lorem suspendisse eleifend consectetur volutpat, hac volutpat nec nulla. 
                                            </p>
                                        </div>
                                    </Grid>
                                </div>
                            </Grid>

                            <Grid theme={theme} item lg={4} sm={12}>
                                <div className='px-12 py-10 rounded-xl bg-white font-Proxima-Nova'>
                                    <h2 className='text-[16pt] font-bold text-title'>Atur Jumlah dan Catatan</h2>
                                    <div className='mt-4'>
                                        <div className="flex flex-row items-center">
                                            <button className='rounded-full mr-6  p-2 bg-light-gray text-white'>
                                                <FaMinus />
                                            </button>
                                            <span className='font-Gilroy-ExtraBold text-[20pt] mr-6 font-extrabold text-title'>
                                                2
                                            </span>
                                            <button className='rounded-full mr-6  p-2 bg-title text-white'>
                                                <FaPlus />
                                            </button>
                                            <span className='text-[14pt] text-gray'>Stok 24</span>
                                        </div>
                                        <div className='text-[10pt] text-light-gray mt-3'>Max Pembelian 2 pcs</div>
                                    </div>

                                    <div className='mt-4'>
                                        <InputLabelRegister forInput="catatan" value="Catatan" className={'text-[16px] mb-0'} />
                                        <TextInputRegister
                                            id="catatan"
                                            type="text"
                                            name="catatan"
                                            placeholder="Catatan bila ada"
                                            className="mt-1 block w-full"
                                        />

                                        <InputLabelRegister forInput="tanggal_pembelian" value="Tanggal Pembelian" className={'text-[16px] mb-0 mt-2'} />
                                        <TextInputRegister
                                            id="tanggal_pembelian"
                                            type="text"
                                            name="tanggal_pembelian"
                                            placeholder="Tanggal Pembelian"
                                            className="mt-1 block w-full"
                                        />
                                    </div>

                                    <div className='mt-4 flex flex-row justify-between items-center'>
                                        <span className='font-Gilroy-ExtraBold text-[16px] text-title'>
                                            Total
                                        </span>
                                        <span className='font-Proxima-Nova text-[24px] font-extrabold text-orange-400'>
                                            Rp. 100.000
                                        </span>
                                    </div>

                                    <button className='mt-8 w-full rounded-xl py-3 text-white bg-title font-extrabold font-Gilroy-ExtraBold' style={{ boxShadow: '0px 16px 24px rgba(29, 51, 79, 0.24)' }}>
                                        Beli Sekarang
                                    </button>

                                    <button className='mt-6 w-full rounded-xl py-3 text-light-gray border-2 border-1 font-extrabold font-Gilroy-ExtraBold' >
                                        Tambahkan ke pesanan
                                    </button>


                                    <div className='mt-8 flex flex-row justify-between items-center font-Gilroy-ExtraBold'>
                                        <span className='text-[14px] text-gray'>
                                            <ChatRounded className='mr-2'/> Chat Penjual
                                        </span>
                                        <span className='text-[14px] text-gray'>
                                            |
                                        </span>
                                        <span className='text-[14px] text-gray'>
                                            <Share className='mr-2'/> Bagikan
                                        </span>
                                    </div>

                                </div>
                            </Grid>
                        </Grid>

                        <div className='mt-8'>
                            <h1 className='font-Gilroy-ExtraBold font-bold text-[20pt] text-title'>Produk Lainnya</h1>

                            <div className='mt-8'>
                                <ProductListCard productCount={4} />
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
