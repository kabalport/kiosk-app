import React from 'react';
import AppRoutes from './routes/AppRoutes'; // 라우터 설정 파일 경로에 따라서 import 경로를 조절해주세요.
import './App.css'; // 앱 전체의 스타일을 설정하는 CSS. 필요에 따라 추가/제거 가능

const App: React.FC = () => {
    return (
        <div className="App">
            <AppRoutes />
        </div>
    );
}

export default App;
