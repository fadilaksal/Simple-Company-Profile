import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Box, createTheme, Grid, SvgIcon, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TextInputRegister from '@/Components/TextInputRegister';
import InputLabelRegister from '@/Components/InputLabelRegister';
import { FaArrowRight } from 'react-icons/fa';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Login({ status, canResetPassword }) {
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

    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <div className='min-h-screen'>
            <Head title="Login" />
            <Grid theme={theme} container spacing={2} className={'h-auto relative overflow-hidden'}>
                <Grid theme={theme} item md={7} xs={12}>
                    <Box alignItems={'center'} className={'py-10 px-10 md:px-20 md:py-24 xl:px-28'} margin={'auto'}>
                        <div className='font-Gilroy-Light font-[800] text-[18pt] text-[#1D334F] md:text-[26pt] xl:text-[32pt]'>
                            Hai, <span className={'font-Gilroy-ExtraBold'}>Selamat Datang</span> 
                        </div>

                        <div 
                            className={'leading-[130%] font-[600] text-[12pt] font-Proxima-Nova mt-2 text-gray-secondary md:text-[14pt] xl:text-[20pt]'}>
                            Silahkan login untuk melanjutkan
                        </div>
                        
                        <img src="./assets/images/img-register.png" alt="" className='w-[600px] mt-2 md:absolute md:top-[120px] md:-right-52 xl:w-[768px] xl:-right-20 z-50' />

                        
                        <form onSubmit={submit} 
                            className='mt-5
                                p-4
                                md:mt-20'>

                            <div className="mt-4">
                                <InputLabelRegister forInput="email" value="Email" />

                                <TextInputRegister
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    placeholder={'Masukkan Email'}
                                    autoComplete="email"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

                            <div className="mt-4">
                                <InputLabelRegister forInput="password" value="Password" />

                                <TextInputRegister
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    handleChange={onHandleChange}
                                    placeholder="Masukkan password anda"
                                    required
                                />

                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <button 
                                type={'submit'}
                                disabled={processing} 
                                className={'w-full p-4 text-center bg-title text-white relative mt-10'}>
                                Login
                                <FaArrowRight className='absolute right-6 top-4 text-[24px]' />
                            </button>
                        </form>
                    </Box>
                </Grid>
                <Grid theme={theme} item md={5} xs={0} className={'invisible md:visible relative z-0'} style={{background: 'linear-gradient(180deg, #0582CA 0%, #002060 100%)'}}>
                    <img src="./assets/images/register-top-right.png" alt="" className='absolute top-0 right-0' />
                    <img src="./assets/images/register-bottom-right.png" alt="" className='absolute bottom-0 left-0' />
                </Grid>
            </Grid>
        </div>
    );
}
