import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useRef, useEffect, createContext, useContext, Fragment } from 'react';
import { Head } from '@inertiajs/inertia-react';
import { FaPlus } from "react-icons/fa";
import { Visibility, VisibilityOff, Add as AddIc } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { Container, InputLabel, Button, Box, Modal, Typography, InputAdornment, IconButton, OutlinedInput, FormControl, Alert, AlertTitle } from '@mui/material';
import { useForm } from '@inertiajs/inertia-react';
import { Transition } from '@headlessui/react';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import InputError from '@/Components/InputError';


export default function Index({ auth, users, dataUrl }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

    const { data, setData, post, errors, reset, processing, recentlySuccessful } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

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

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);

    const columns = [
        { field: 'id', headerName: 'ID', width: 10 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'email', headerName: 'Email', width: 200 },
        { 
            field: 'email_verified_at', 
            headerName: 'Verified At', 
            width: 130, 
            type: 'dateTime',
            renderCell: (params) => { 
                const date = moment(params.value).format('YYYY-MM-DD HH:mm')
                return (
                    date
                )
             }
        },
        { 
            field: 'created_at', 
            headerName: 'Created At', 
            width: 130, 
            type: 'dateTime',
            renderCell: (params) => { 
                const date = moment(params.value).format('YYYY-MM-DD HH:mm')
                return (
                    date
                )
             }
        },
        { 
            field: 'updated_at', 
            headerName: 'Updated At', 
            width: 130, 
            type: 'dateTime',
            renderCell: (params) => { 
                const date = moment(params.value).format('YYYY-MM-DD HH:mm')
                return (
                    date
                )
             }
        },
        { 
            field: 'action', 
            headerName: '', 
            width: 180,
            sortable: false,
            filterable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                const onClick = (e) => {
                    const currentRow = params.row;
                    return alert(JSON.stringify(currentRow, null, 4));
                };
                
                return (
                    <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small" onClick={onClick}>Edit</Button>
                    <Button variant="outlined" color="error" size="small" onClick={onClick}>Delete</Button>
                    </Stack>
                );
            }
        },
    ];

    // const rows = users.data;

    const [tableData, setTableData] = useState([])
    const [tablePage, setTablePage] = useState(0)
    const [tablePageSize, setTablePageSize] = useState(10)
    const [tableTotal, setTableTotal] = useState(0)
    const [isTableLoading, setIsTableLoading] = useState(false)

    const handleTablePageChange = (newPage) => {
        setIsTableLoading(true)
        setTablePage(newPage)
        setTable(newPage+1)
        
    }

    const handleTablePageSizeChange = (newPageSize) => {
        setIsTableLoading(true)
        setTablePageSize(newPageSize)
        console.log(newPageSize, tablePage);
        setTable(tablePage, newPageSize)
        
    }

    function setTable(page = 0, pageSize = 10) {
        fetch(dataUrl + `?page=${page}&page_size=${pageSize}`)
            .then((data) => data.json())
            .then((data) => {
                setTableData(data.data)
                setTablePage(data.current_page - 1)
                setTableTotal(data.total)
                setIsTableLoading(false)
            })
    }

    useEffect(() => {
        setIsTableLoading(true)
        setTable()
    }, [])

    const createUser = (e) => {
        e.preventDefault();

        post(route('admin.users.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
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
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users</h2>}
        >
            <Head title="Users" />

            <Container sx={{ py: 2 }}>
                <Box className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <header className='border-b-gray-300 border-b-2 pb-3'>
                            <div className="flex flex-row">
                                <h2 className="text-lg font-medium text-gray-900 flex-grow">Data Users</h2>

                                <Button variant="outlined" className="ml-4 flex" type="button" onClick={handleModalOpen}>
                                    <FaPlus className='mr-2'/> Tambah Data
                                </Button>
                            </div>
                        </header>
                        <section className='mt-2'>
                            <div style={{ width: '100%' }}>
                                {/* <DataGrid
                                    autoHeight {...rows}
                                    rows={rows}
                                    columns={columns}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                /> */}
                                <DataGrid
                                    rows={tableData}
                                    columns={columns}
                                    autoHeight {...tableData}
                                    rowCount={tableTotal}
                                    rowsPerPageOptions={[10, 20, 50, 100]}
                                    pagination
                                    page={tablePage}
                                    pageSize={tablePageSize}
                                    paginationMode="server"
                                    // initialState={initialState}
                                    loading={isTableLoading}
                                    onPageChange={(newPage) => handleTablePageChange(newPage)}
                                    onPageSizeChange={(newPageSize) => handleTablePageSizeChange(newPageSize)}
                                />
                            </div>
                        </section>
                    </div>
                </Box>

                <Modal
                    open={modalOpen}
                    onClose={handleModalClose}
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
                                Tambah User
                            </Typography>
                        </Box>
                        <Box sx={{ p:2, display: 'flex', flexWrap: 'wrap' }}>
                            <form onSubmit={createUser} className="mt-3 space-y-6">
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
                                        value={data.password}
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
                                        value={data.password_confirmation}
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
                                    <Button onClick={handleModalClose} type='button' variant="outlined" size='large' color='inherit' sx={{ ml: 1 }}>Cancel</Button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </Modal>
            </Container>
        </AuthenticatedLayout>
    );
}
