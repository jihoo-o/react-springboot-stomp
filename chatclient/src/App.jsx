import './App.css';
import React, { useState } from 'react';
import Test from './components/Test';

const App = () => {
    const [render, setRender] = useState(true);

    return <>{render && <Test />}</>;
};

export default App;
