import './App.css';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';
import { useEffect } from 'react';

const App = () => {
    useEffect(() => {
        const onConnected = () => {
            console.log('connected');
        };

        const onError = () => {
            console.error('errors!');
        };

        const Sock = new SockJS('http://localhost:8080/webSocket');
        const stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }, []);

    return <div>app</div>;
};

export default App;
