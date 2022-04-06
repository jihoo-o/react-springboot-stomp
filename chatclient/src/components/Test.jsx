import React, { useEffect } from 'react';
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const Test = (props) => {
    let stompClient;
    useEffect(() => {
        stompClient = new StompJs.Client();
        stompClient.webSocketFactory = () =>
            new SockJS('http://localhost:8080/webSocket');
        stompClient.onConnect = () => {
            console.log('연결 ✨');
        };
        stompClient.onStompError = (frame) => {
            console.log('Broker reported error: ' + frame.headers['message']);
            console.log('Additional details: ' + frame.body);
        };
        stompClient.onDisconnect = () => {
            console.log('끊김 ✂️');
        };
        stompClient.activate();
        return () => stompClient.deactivate();
    }, []);

    return <div>test</div>;
};

export default Test;
