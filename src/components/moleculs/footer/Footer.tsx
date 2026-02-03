import React from 'react';
import S from './Footer.style';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <S.FooterWrap>
            <S.FooterCont>
                <S.Copyright>
                    COPYRIGHT© 2024 BUCKET STORE ALL RIGHTS RESERVED.
                </S.Copyright>
                <S.FooterMenu>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                    <li><Link to="/privacy">PRIVACY</Link></li>
                    <li><Link to="/terms">TERMS</Link></li>
                    <li>
                        고객센터 : 080-999-0000
                        <S.InfoText>
                            (운영시간 : 평일 09:00 ~ 18:00 , 점심시간 : 12:00 ~ 13:00, 주말 및 공휴일 휴무)        
                        </S.InfoText>
                    </li>
                </S.FooterMenu>
            </S.FooterCont>
        </S.FooterWrap>
    );
};

export default Footer;