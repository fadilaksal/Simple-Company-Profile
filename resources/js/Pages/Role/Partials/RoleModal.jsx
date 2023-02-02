import { useState, useRef, useEffect} from 'react';
import { Visibility, VisibilityOff, Add as AddIc } from '@mui/icons-material';
import { InputLabel, Button, Box, Modal, Typography, InputAdornment, IconButton, OutlinedInput, FormControl, Alert, AlertTitle } from '@mui/material';
import { useForm } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import InputError from '@/Components/InputError';

export default function RoleModal({ role, isModalOpen, handleModalCloseFn, handleResponseFn }) {
    const { data, setData, post, put, errors, reset, processing, recentlySuccessful } = useForm({
        name: '',
        description: '',
    });
    
    useEffect(() => {
        setData({
            name: role.name,
            description: role.description,
        })
    }, [role])

    const nameInput = useRef();
    const descriptionInput = useRef();

    const updateRole = (e) => {
        e.preventDefault();
        
        put(route('admin.roles.update', { id: role.id }), {
            preserveScroll: true,
            onSuccess: () => {
                role.name = data.name
                role.description = data.description
            },
            onError: () => {
                if (errors.name) {
                    nameInput.current.focus();
                }
                if (errors.description) {
                    descriptionInput.current.focus();
                }
            },
        });
    };

    const createRole = (e) => {
        e.preventDefault();
        
        post(route('admin.roles.store'), {
            preserveScroll: true,
            onSuccess: () => { 
                reset()
                handleResponseFn()
            },
            onError: () => {
                if (errors.name) {
                    nameInput.current.focus();
                }
                if (errors.description) {
                    descriptionInput.current.focus();
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
                        {(role.name == '' || role.name == undefined) ? 'Create Role' : 'Edit Role'}
                    </Typography>
                </Box>
                <Box sx={{ p:2, display: 'flex', flexWrap: 'wrap' }}>
                    <form onSubmit={role.name != '' ? updateRole : createRole} 
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
                                placeholder='Masukkan nama role'
                                label="Name"
                                size='middle'
                                fullWidth 
                                />
                            <InputError message={errors.name} className="mt-2" />
                        </FormControl>
                            
                        <FormControl sx={{ my: 1, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="description">Description</InputLabel>
                            <OutlinedInput 
                                id='description'
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                type='description'
                                ref={descriptionInput}
                                label='Description'
                                placeholder='Masukkan description'
                                size='middle'
                                fullWidth 
                                />
                            <InputError message={errors.description} className="mt-2" />
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
