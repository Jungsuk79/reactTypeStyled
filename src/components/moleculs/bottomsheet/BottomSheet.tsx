import React, {useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import S from './BottomSheet.style';
import BasicButton from "../../atomic/button/BasicButton";

interface BottomSheetProps {
    sheetConfig?: {
        title?: string;
        primaryText?: string;
        secondaryText?: string;
    };
    dragType?:boolean,
    isOpen:boolean,
    onClose:()=>void,
    radius?:string,
    bottomBtn?: boolean;
    children:React.ReactNode,
    onConfirm?:()=>void,
    bottomCancel?:boolean
}

const BottomSheet = ({
    sheetConfig,
    dragType=true,
    isOpen,
    onClose,
    radius,
    bottomBtn = true,
    bottomCancel = true,
    children,
    onConfirm
}:BottomSheetProps) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            // isOpen이 false로 변하면 다시 스크롤을 살려줍니다.
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <S.Overlay
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    {/* e.stopPropagation()은 시트 내부 클릭 시 닫히는 것을 방지합니다. */}
                    <S.SheetContainer
                        as={motion.div}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "tween",  // spring 대신 tween으로 변경!
                            duration: 0.3,
                            ease: [0.32, 0.72, 0, 1] // 애플(iOS)에서 주로 쓰는 부드러운 곡선 값입니다.
                        }}
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        dragElastic={0}
                        onDragEnd={(_, info) => info.offset.y > 30 && onClose()}
                        $radius={radius}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <S.SheetHeader>
                            {dragType ?(
                                <S.HandleBarWrap
                                >
                                    <S.HandleBar/>
                                </S.HandleBarWrap>
                            ):(
                                <S.CloseButton onClick={onClose}>&times;</S.CloseButton>
                            )}
                            {sheetConfig?.title && <S.SheetTitle>{sheetConfig.title}</S.SheetTitle>}
                        </S.SheetHeader>
                        <S.SheetContent>
                            {children}
                        </S.SheetContent>
                        {bottomBtn &&(
                            <S.SheetBottom>
                                {bottomCancel &&(
                                    <BasicButton $variant={"line"} onClick={onClose}>취소</BasicButton>
                                )}
                                <BasicButton onClick={onConfirm}>확인</BasicButton>
                            </S.SheetBottom>
                        )}

                    </S.SheetContainer>
                </S.Overlay>
            )}
        </AnimatePresence>
    );
};

export default BottomSheet;