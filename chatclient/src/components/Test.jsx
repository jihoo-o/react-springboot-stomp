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

    return (
        <div>
            test
            <button
                onClick={() => {
                    stompClient.publish({
                        destination: 'sc/markers/users', // 요청을 보내는 주소
                        body: JSON.stringify('fake data!'), // 요청 보내는 데이터
                    });
                }}
            >
                sc/markers/users로 요청 보내기
            </button>
        </div>
    );
};

export default Test;
