import React from 'react';

const GuideUiPage = () => {
    return (
        <div>
            <div>router에서 BasicLayout 안에 들어간 페이지는 BasicLayout으로 감싸는 페이지로 나옴</div>
            <ol>
                <li>1. usePageHeader 값이 없으면 해더부분 안나옴</li>
                <li>2. 푸터를 안보여주려면 setFooterVisible(false);</li>
                <li>3. 하단메뉴를 안보여주려면 setMenuVisible(false);</li>
            </ol>
            <div>* 가이드 페이지같은경우 BasicLayout으로 감싸지 않는다.</div>
        </div>
    );
};

export default GuideUiPage;