import './App.css';
import React, { useState } from 'react';
import Test from './components/Test';

const App = () => {
    const [render, setRender] = useState(true);

    setTimeout(() => {
        // 3초 뒤에 컴포넌트를 내리면서 소켓이 끊김
        setRender(false);
    }, 3000);

    return <>{render && <Test />}</>;
};

export default App;
