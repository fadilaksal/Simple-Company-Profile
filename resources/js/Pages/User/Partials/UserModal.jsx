import { useState, useRef, useEffect} from 'react';
import { Visibility, VisibilityOff, Add as AddIc } from '@mui/icons-material';
import { InputLabel, Button, Box, Modal, Typography, InputAdornment, IconButton, OutlinedInput, FormControl, Alert, AlertTitle } from '@mui/material';
import { useForm } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import InputError from '@/Components/InputError';

export default function UserModal({ user, isModalOpen, handleModalCloseFn, handleResponseFn }) {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const { data, setData, post, put, errors, reset, processing, recentlySuccessful } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    
    useEffect(() => {
        setData({
            name: user.name,
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation,
        })
    }, [user])

    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const passwordConfirmationInput = useRef();
    
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPasswordConfirmation = () => setShowPasswordConfirmation((show) => !show);


    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseDownPasswordConfirmation = (event) => {
        event.preventDefault();
    };

    const updateUser = (e) => {
        e.preventDefault();
        
        put(route('admin.users.update', { id: user.id }), {
            preserveScroll: true,
            onSuccess: () => {
                user.name = data.name
                user.email = data.email
            },
            onError: () => {
                if (errors.name) {
                    nameInput.current.focus();
                }
                if (errors.email) {
                    emailInput.current.focus();
                }
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.password_confirmation) {
                    reset('password_confirmation');
                    passwordConfirmationInput.current.focus();
                }
            },
        });
    };

    const createUser = (e) => {
        e.preventDefault();
        
        post(route('admin.users.store'), {
            preserveScroll: true,
            onSuccess: () => { 
                reset()
                handleResponseFn()
            },
            onError: () => {
                if (errors.name) {
                    nameInput.current.focus();
                }
                if (errors.email) {
                    emailInput.current.focus();
                }
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.password_confirmation) {
                    reset('current_password');
                    passwordConfirmationInput.current.focus();
                }
            },
        });
    };
    

    return (
        <Modal
            open={isModalOpen}
            onClose={handleModalCloseFn}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 600,
                bgcolor: 'background.paper',
                borderRadius: 5,
                boxShadow: 24,
                p: 4,
                }}>
                <Box sx={{ borderBottom: 1, pb: 2 }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {(user.name == '' || user.name == undefined) ? 'Create User' : 'Edit User'}
                    </Typography>
                </Box>
                <Box sx={{ p:2, display: 'flex', flexWrap: 'wrap' }}>
                    <form onSubmit={user.name != '' ? updateUser : createUser} 
                        className="mt-3 space-y-6">
                        <Transition
                            show={recentlySuccessful}
                            enterFrom="opacity-0"
                            leaveTo="opacity-0"
                            className="transition ease-in-out"
                        >
                            <Alert severity="success" sx={{width: '100%'}}>
                                <AlertTitle>Success</AlertTitle>
                                Berhasil menyimpan data
                            </Alert>
                        </Transition>
                        
                        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="name">Name</InputLabel>
                            <OutlinedInput 
                                id='name'
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                type='text'
                                ref={nameInput}
                                placeholder='Masukkan nama user'
                                label="Name"
                                size='middle'
                                fullWidth 
                                />
                            <InputError message={errors.name} className="mt-2" />
                        </FormControl>
                            
                        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="email">Email address</InputLabel>
                            <OutlinedInput 
                                id='email'
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                type='email'
                                ref={emailInput}
                                label='Email address'
                                placeholder='Masukkan email'
                                size='middle'
                                fullWidth 
                                />
                            <InputError message={errors.email} className="mt-2" />
                        </FormControl>
                            
                        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput 
                                id='password'
                                // value={data.password}
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder='Masukkan password'
                                size='middle'
                                label='password'
                                fullWidth 
                                ref={passwordInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                />
                            <InputError message={errors.password} className="mt-2" />
                        </FormControl>
                            
                        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="password_confirmation">Password Confirmation</InputLabel>
                            <OutlinedInput 
                                id='password_confirmation'
                                // value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                type={showPasswordConfirmation ? 'text' : 'password'}
                                placeholder='Masukkan password konfirmasi'
                                size='middle'
                                label='Password Confirmation'
                                fullWidth 
                                ref={passwordConfirmationInput}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPasswordConfirmation}
                                            onMouseDown={handleMouseDownPasswordConfirmation}
                                            edge="end"
                                            >
                                            {showPasswordConfirmation ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </FormControl>
                        
                        <Box width={'100%'} sx={{ mt:2, display: 'flex', flexDirection: 'row', justifyContent: 'right' }}>
                            <Button disabled={processing} variant="outlined" size='large' sx={{ ml: 1 }} type={'submit'}><AddIc></AddIc>Simpan</Button>
                            <Button onClick={handleModalCloseFn} type='button' variant="outlined" size='large' color='inherit' sx={{ ml: 1 }}>Cancel</Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Modal>
    );
}
