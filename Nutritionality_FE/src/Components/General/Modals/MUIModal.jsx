import Modal from '@mui/material/Modal';

function MUIModal({ content, onClose }) {
    return (
        <Modal open={content ? true : false} onClose={onClose}>
            {content}
        </Modal>
    );
}

export default MUIModal;