import React from 'react';
import S from  './Nodata.style';

interface NodataProps {
    children: React.ReactNode;
}

const Nodata = ({children}:NodataProps) => {
    return (
        <>
            <S.NodataArea>
                {children}
            </S.NodataArea>

        </>
    );
};

export default Nodata;