import React from 'react';
import S from './BasicModal.style';

interface BasicModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    alignRight?: boolean;
    onClick?: () => void;
}

const BasicModal = ({ onClick,isOpen, onClose, title, children,alignRight=false }:BasicModalProps) => {
    if (!isOpen) return null;

    return (
        <S.Overlay onClick={onClose}>
            {/* stopPropagation으로 본체 클릭 시 닫힘 방지 */}
            <S.ModalContainer onClick={(e) => e.stopPropagation()}>
                <S.ModalHeader>
                    {title && <h3>{title}</h3>}
                    <button onClick={onClose}>&times;</button>
                </S.ModalHeader>
                <S.ModalContent>
                    {children}
                </S.ModalContent>
                <S.ModalFooter $alignRight={alignRight}>
                    <button className="cancel" onClick={onClose}>취소</button>
                    <button onClick={onClick}>확인</button>
                </S.ModalFooter>
            </S.ModalContainer>
        </S.Overlay>
    );
};

export default BasicModal;