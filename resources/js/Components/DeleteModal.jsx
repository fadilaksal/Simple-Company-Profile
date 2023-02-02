
import { useForm } from "@inertiajs/inertia-react";
import { Alert, AlertTitle, Box, Modal, Snackbar } from "@mui/material";
import DangerButton from "./DangerButton";
import SecondaryButton from "./SecondaryButton";

export function DeleteModal({ openDeleteModal = () => {}, closeDeleteModal = () => {}, deleteFn = () => {}, recentlySuccessful = false, processing }) {
    const handleClose = () => {
        recentlySuccessful = false
    }
    return (
        <Box>
            <Snackbar open={recentlySuccessful} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Berhasil menghapus data
                </Alert>
            </Snackbar>
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
                        <form onSubmit={deleteFn} className="p-6">
                            <h2 className="text-lg font-medium text-gray-900">
                                Are you sure you want to delete account?
                            </h2>

                            <p className="mt-1 text-sm text-gray-600">
                                Once data is deleted, all of its resources and data will be permanently deleted.
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
        </Box>)
}