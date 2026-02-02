import React from 'react';
import { useAlertStore } from '../../../store/useAlertStore';
import BasicModal from '../../moleculs/modal/BasicModal';

const GlobalModal = () => {
    const { isOpen, title, content, closeAlert, onConfirm } = useAlertStore();

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        closeAlert();
    };

    return (
        <BasicModal
            isOpen={isOpen}
            onClose={closeAlert}
            title={title}
            onClick={handleConfirm}
        >
            {content}
        </BasicModal>
    );
};

export default GlobalModal;