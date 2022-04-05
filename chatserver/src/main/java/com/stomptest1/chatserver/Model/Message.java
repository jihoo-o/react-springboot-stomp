package com.stomptest1.chatserver.Model;

import lombok.*;

    @NoArgsConstructor
    @AllArgsConstructor
    @Getter
    @Setter
    @ToString
    public class Message {
        private String senderName;
        private String receiverName;
        private String message;
        private String date;
    }
