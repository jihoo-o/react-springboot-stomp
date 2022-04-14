package com.stomptest1.chatserver.Controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RestController;

import com.stomptest1.chatserver.Model.Marker_user;


@RestController
public class ChatController {
    @MessageMapping("/marker")
    @SendTo("/topic/marker-create")
    public Marker_user broadCast(Marker_user message){
    	System.out.println(message);
        return message;
    }
}
