import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import { Box, createTheme, Grid, SvgIcon, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TextInputRegister from '@/Components/TextInputRegister';
import InputLabelRegister from '@/Components/InputLabelRegister';
import { FaArrowRight } from 'react-icons/fa';

export default function Register() {
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
        first_name: '',
        last_name: '',
        ktp: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            preserveScroll: true,
            onSuccess: () => {
                // user.name = data.name
                // user.email = data.email
                // user.role_user = data.role_user
            },
            onError: () => {
                console.log(errors);
            }
        });
    };

    return (
        <div className='min-h-screen'>
            <Grid theme={theme} container spacing={2} className={'h-auto relative overflow-hidden'}>
                <Grid theme={theme} item md={7} xs={12}>
                    <Box alignItems={'center'} className={'py-10 px-10 md:px-20 md:py-20 xl:px-28'} margin={'auto'}>
                        <div className='font-Gilroy-Light font-[800] text-[18pt] text-[#1D334F] md:text-[26pt] xl:text-[32pt]'>
                            Hai, <span className={'font-Gilroy-ExtraBold'}>Selamat Datang</span> 
                        </div>

                        <div 
                            className={'leading-[130%] font-[600] text-[12pt] font-Proxima-Nova mt-2 text-gray-secondary md:text-[14pt] xl:text-[20pt]'}>
                            Silahkan login untuk melanjutkan
                        </div>
                        
                        <img src="./assets/images/img-register.png" alt="" className='w-[600px] mt-2 md:absolute md:top-[100px] md:-right-52 xl:w-[768px] xl:-right-20' />

                        <button className='text-center 
                            w-full
                            text-sm 
                            border-solid 
                            border-[1px] 
                            border-light-white 
                            rounded-lg 
                            font-Proxima-Nova
                            text-[14px]
                            font-[600]
                            text-[#5F5F5F]
                            mt-5
                            p-4
                            md:mt-20'>
                            <span>
                                <SvgIcon className='mr-3' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_123_284)">
                                    <path d="M5.31891 14.5034L4.4835 17.6221L1.43011 17.6867C0.517594 15.9942 0 14.0578 0 11.9999C0 10.0101 0.483938 8.13356 1.34175 6.48126H1.34241L4.06078 6.97964L5.25159 9.6817C5.00236 10.4083 4.86652 11.1883 4.86652 11.9999C4.86661 12.8808 5.02617 13.7248 5.31891 14.5034Z" fill="#FBBB00"/>
                                    <path d="M23.7902 9.75845C23.928 10.4844 23.9999 11.234 23.9999 12.0002C23.9999 12.8593 23.9095 13.6974 23.7375 14.5057C23.1533 17.2565 21.6269 19.6585 19.5124 21.3582L19.5118 21.3576L16.0878 21.1829L15.6032 18.1578C17.0063 17.335 18.1028 16.0472 18.6804 14.5057H12.2637V9.75845H18.774H23.7902Z" fill="#518EF8"/>
                                    <path d="M19.5119 21.3572L19.5126 21.3578C17.4561 23.0108 14.8438 23.9998 12.0001 23.9998C7.43018 23.9998 3.457 21.4455 1.43018 17.6866L5.31897 14.5034C6.33236 17.208 8.94138 19.1332 12.0001 19.1332C13.3148 19.1332 14.5465 18.7778 15.6033 18.1574L19.5119 21.3572Z" fill="#28B446"/>
                                    <path d="M19.6596 2.76262L15.7721 5.94525C14.6783 5.26153 13.3853 4.86656 12 4.86656C8.87213 4.86656 6.21431 6.88017 5.25169 9.68175L1.34245 6.48131H1.3418C3.33895 2.63077 7.36223 0 12 0C14.9117 0 17.5814 1.03716 19.6596 2.76262Z" fill="#F14336"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_123_284">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </SvgIcon>
                                
                                Sign In With Google
                            </span>
                        </button>

                        <div className="relative flex py-5 items-center font-Proxima-Nova text-[16px] font-[400] text-light-gray mt-6">
                            <div className="flex-grow border-t border-gray-400"></div>
                            <span className="flex-shrink mx-4 text-gray-400">or sign in with email</span>
                            <div className="flex-grow border-t border-gray-400"></div>
                        </div>
                        
                        <form onSubmit={submit}>
                            <Grid container spacing={2} className={'mb-2'}>
                                <Grid item md={6} xs={12}>
                                    <InputLabelRegister forInput="first_name" value="Nama Depan" />

                                    <TextInputRegister
                                        id="first_name"
                                        name="first_name"
                                        value={data.first_name}
                                        placeholder={'Masukkan Nama Belakang'}
                                        className="mt-1 block w-full"
                                        autoComplete="first_name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <InputLabelRegister forInput="last_name" 
                                        value="Nama Belakang" />

                                    <TextInputRegister
                                        id="last_name"
                                        name="last_name"
                                        value={data.last_name}
                                        placeholder={'Masukkan Nama Belakang'}
                                        autoComplete="last_name"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                        required
                                    />

                                    <InputError message={errors.name} className="mt-2" />
                                </Grid>
                            </Grid>

                            <div className="mt-4">
                                <InputLabelRegister forInput="ktp" value="No. KTP" />

                                <TextInputRegister
                                    id="ktp"
                                    type="number"
                                    name="ktp"
                                    value={data.ktp}
                                    className="mt-1 block w-full"
                                    placeholder={'Masukkan No. KTP anda'}
                                    autoComplete="ktp"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.email} className="mt-2" />
                            </div>

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
                                <InputLabelRegister forInput="email" value="No. Telepon" />

                                <TextInputRegister
                                    id="phone_number"
                                    type="text"
                                    name="phone_number"
                                    value={data.phone_number}
                                    className="mt-1 block w-full"
                                    placeholder={'Masukkan No. Telepon'}
                                    autoComplete="phone_number"
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

                            <div className="mt-4">
                                <InputLabelRegister forInput="password_confirmation" value="Confirm Password" />

                                <TextInputRegister
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    placeholder="Konfirmasi password anda"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    handleChange={onHandleChange}
                                    required
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>


                            <button 
                                type={'submit'}
                                disabled={processing} 
                                className={'w-full p-4 text-center bg-title text-white relative mt-10'}>
                                Register
                                <FaArrowRight className='absolute right-6 top-4 text-[24px]' />
                            </button>
                            <div className="flex items-center justify-center mt-4">
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-gray-secondary hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 mb-10"
                                >
                                    Sudah punya akun ?
                                </Link>
                            </div>
                        </form>
                    </Box>
                </Grid>
                <Grid theme={theme} item md={5} xs={0} className={'bg-title invisible md:visible'}>
                    <Box paddingTop={20} paddingRight={18}>
                        
                    </Box>
                </Grid>
            </Grid>
            <Head title="Register" />
        </div>
    );
}
