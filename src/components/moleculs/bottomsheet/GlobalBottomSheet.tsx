import React from 'react';
import { useBottomSheetStore } from '../../../store/useBottomSheetStore';
import BottomSheet from '../../moleculs/bottomsheet/BottomSheet';

const GlobalBottomSheet = () => {
    const { isOpen, closeSheet, ...config } = useBottomSheetStore();
    return (
        <BottomSheet
            {...config}
            isOpen={isOpen}
            onClose={closeSheet}
        />
    );
};

export default GlobalBottomSheet;