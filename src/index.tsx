import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  // App 컴포넌트의 위치에 따라 경로를 조절해주세요.
import './index.css';    // 전역 스타일. 필요에 따라 추가/제거 가능

// 전역 상태 관리 라이브러리 등의 프로바이더를 추가하려면 여기에 import해주세요.

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root') // 앱을 마운트할 DOM 요소의 ID. 일반적으로 'root'를 사용합니다.
);

// 만약 서비스 워커나 PWA 기능을 사용하려면 이 위치에 코드를 추가할 수도 있습니다.
