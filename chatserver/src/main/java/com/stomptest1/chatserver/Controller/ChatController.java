package com.stomptest1.chatserver.Controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import com.stomptest1.chatserver.Model.Marker_user;


@RestController
public class ChatController {
    @MessageMapping("/sc/markers/users")
    @SendTo("/topic/marker-create")
    public String broadCast(String message){
    	System.out.println(message);
        return message;
    }
}
