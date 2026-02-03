import React, {useEffect,useState} from 'react';
import Notice from "./Notice";

const NoticeContainer = () => {
    const [notice, setNotice] = useState([]);
    useEffect(() => {
        const noticeData = async() => {
            const response = await fetch('http://localhost:4000/notice');
            const datas = await response.json();
            setNotice(datas)
        }
        noticeData();
    }, []);

    const noticeList = notice.map((data,index)=>(
        <Notice key={index} data={data} />
    ))

    return (
        <ul>
            {noticeList}
        </ul>
    );
};

export default NoticeContainer;