import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useState, useRef, useEffect,  } from 'react';
import { Head, useForm } from '@inertiajs/inertia-react';
import { Add as AddIc } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { Container, InputLabel, Button, Box, Modal, Typography, InputAdornment, IconButton, OutlinedInput, FormControl, Alert, AlertTitle, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import RoleModal from './Partials/RoleModal';
import SearchInput from '@/Components/SearchInput';
import { DeleteModal } from '@/Components/DeleteModal';

export default function Index({ auth, roleAuth, dataUrl }) {
    const [tableData, setTableData] = useState([])
    const [tablePage, setTablePage] = useState(0)
    const [tablePageSize, setTablePageSize] = useState(10)
    const [tableTotal, setTableTotal] = useState(0)
    const [isTableLoading, setIsTableLoading] = useState(false)
    const [searchValue, setSearchValue] = useState('')

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
        { field: 'description', headerName: 'Description', width: 500 },
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

    const [role, setRole] = useState({
        name: '',
        description: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openEditModal = (roleEdited) => {
        setRole(roleEdited)
        setIsModalOpen(true)
    }

    const openCreateModal = () => {
        setRole({
            name: '',
            description: '',
        })
        setIsModalOpen(true)
    };

    const handleModalClose = () => setIsModalOpen(false);

    const handleResponseModal = () => setTable(tablePage+1)

    const { delete: destroy, reset, recentlySuccessful,processing } = useForm({});

    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const openDialogDelete = (role) => {
        setOpenDeleteModal(true)
        setRole(role)
    }

    const closeDeleteModal = () => {
        setOpenDeleteModal(false);
        reset();
    };

    const deleteRole = (e) => {
        e.preventDefault();

        destroy(route('admin.roles.destroy', { id: role.id }), {
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
            roleAuth={roleAuth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Roles</h2>}
        >
            <Head title="Roles" />

            <Container sx={{ py: 2 }}>
                <Box className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <Box className='mb-4'>
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                    <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
                                </Grid>
                                <Grid item xs={6} md={4} className={'text-end'}>
                                    <Button variant="outlined" size='large' className="ml-4 flex" type="button" onClick={openCreateModal}>
                                        <AddIc className='mr-2'/> Tambah Data
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <section>
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

                <RoleModal 
                    role={role}
                    isModalOpen={isModalOpen}
                    handleModalCloseFn={handleModalClose}
                    handleResponseFn={handleResponseModal}
                    />
                
                <DeleteModal
                    openDeleteModal={openDeleteModal}
                    closeDeleteModal={closeDeleteModal}
                    deleteFn={deleteRole}
                    recentlySuccessful={recentlySuccessful}
                    processing={processing}
                    />
            </Container>
        </AuthenticatedLayout>
    );
}
