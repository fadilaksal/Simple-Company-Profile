import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useRef, useEffect, createContext, useContext, Fragment } from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { FaPlus } from "react-icons/fa";
import { Visibility, VisibilityOff, Add as AddIc, Search as SearchIcon } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { Container, InputLabel, Button, Box, Modal, Typography, InputAdornment, IconButton, OutlinedInput, FormControl, Alert, AlertTitle, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import UserModal from './Partials/UserModal';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';
import { Transition } from '@headlessui/react';
    
const SearchInput = ({searchValue, setSearchValue}) => {
    return <OutlinedInput
            onChange={(event) => setSearchValue(event.target.value)}
            type={'text'}
            placeholder={'Search'}
            value={searchValue}
            size='small'
            startAdornment={
                <InputAdornment position="start">
                    <SearchIcon></SearchIcon>
                </InputAdornment>
            }
            />
}

export default function Index({ auth, dataUrl }) {
    const [tableData, setTableData] = useState([])
    const [tablePage, setTablePage] = useState(0)
    const [tablePageSize, setTablePageSize] = useState(10)
    const [tableTotal, setTableTotal] = useState(0)
    const [isTableLoading, setIsTableLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleTablePageChange = (newPage) => {
        setTablePage(newPage)
        setTable(newPage+1)
    }

    const handleTablePageSizeChange = (newPageSize) => {
        setTablePageSize(newPageSize)
        setTable(tablePage, newPageSize)
    }

    function setTable(page = tablePage, pageSize = tablePageSize, search = '') {
        setIsTableLoading(true)
        fetch(dataUrl + `?page=${page}&page_size=${pageSize}&search=${search}`)
            .then((data) => data.json())
            .then((data) => {
                setTableData(data.data)
                setTablePage(data.current_page - 1)
                setTableTotal(data.total)
                setIsTableLoading(false)
            })
    }

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
                const onClickEdit = (e) => {
                    const currentRow = params.row;
                    openEditModal(currentRow)
                };
                const onClickDelete = (e) => {
                    const currentRow = params.row;
                    openDialogDelete(currentRow)
                };
                
                return (
                    <Stack direction="row" spacing={2}>
                    <Button variant="outlined" color="warning" size="small" onClick={onClickEdit}>Edit</Button>
                    <Button variant="outlined" color="error" size="small" onClick={onClickDelete}>Delete</Button>
                    </Stack>
                );
            }
        },
    ];

    useEffect(() => {
        const updateTable = setTimeout(() => {
            setTable(tablePage, tablePageSize, searchValue)
        }, 500)

        return () => clearTimeout(updateTable)
    }, [searchValue])

    useEffect(() => {
        setTable()
    }, [])


    const openEditModal = (userEdited) => {
        setUser(userEdited)
        setIsModalOpen(true)
    }

    const openCreateModal = () => {
        setUser({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        })
        setIsModalOpen(true)
    };

    const handleModalClose = () => setIsModalOpen(false);

    const handleResponseFn = () => setTable(tablePage+1)


    const {
        delete: destroy,
        processing,
        reset,
        errors,
        recentlySuccessful
    } = useForm({});

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const openDialogDelete = (user) => {
        setOpenDeleteModal(true)
        setUser(user)
    }

    const closeDeleteModal = () => {
        setOpenDeleteModal(false);
        reset();
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('admin.users.destroy', { id: user.id }), {
            preserveScroll: true,
            onSuccess: () => { 
                closeDeleteModal()
                setTable(tablePage+1)
            },
            onFinish: () => reset(),
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
                        <Transition
                            show={recentlySuccessful}
                            enterFrom="opacity-0"
                            leaveTo="opacity-0"
                            className="transition ease-in-out mb-4" >
                                <Alert severity="success" sx={{width: '100%'}}>
                                    <AlertTitle>Success</AlertTitle>
                                    Berhasil menghapus data
                                </Alert>
                        </Transition>
                        <header >
                            <Box>
                                <Grid container spacing={2}>
                                    <Grid item xs={6} md={8}>
                                        <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}></SearchInput>
                                    </Grid>
                                    <Grid item xs={6} md={4} className={'text-end'}>
                                        <Button variant="outlined" size='large' className="ml-4 flex" type="button" onClick={openCreateModal}>
                                            <AddIc className='mr-2'/> Tambah Data
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </header>
                        <section className='mt-2'>
                            <div style={{ width: '100%' }}>
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
                                    loading={isTableLoading}
                                    onPageChange={(newPage) => handleTablePageChange(newPage)}
                                    onPageSizeChange={(newPageSize) => handleTablePageSizeChange(newPageSize)}
                                />
                            </div>
                        </section>
                    </div>
                </Box>

                <UserModal 
                    user={user}
                    isModalOpen={isModalOpen}
                    handleModalCloseFn={handleModalClose}
                    handleResponseFn={handleResponseFn}
                    >
                </UserModal>

                <Modal 
                    open={openDeleteModal}
                    onClose={closeDeleteModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        borderRadius: 5,
                        boxShadow: 24,
                        p: 1,
                        }}>
                        <Box sx={{ p:1, display: 'flex', flexWrap: 'wrap' }}>
                            <form onSubmit={deleteUser} className="p-6">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Are you sure you want to delete account?
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Once user is deleted, all of its resources and data will be permanently deleted.
                                </p>

                                <div className="mt-6 flex justify-end">
                                    <SecondaryButton onClick={closeDeleteModal}>Cancel</SecondaryButton>

                                    <DangerButton className="ml-3" processing={processing}>
                                        Delete Account
                                    </DangerButton>
                                </div>
                            </form>
                        </Box>
                    </Box>
                </Modal>
            </Container>
        </AuthenticatedLayout>
    );
}
