package com.stomptest1.chatserver.Model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Marker_user {
	private String userId;
    private String lat;
    private String lng;
    private String type;
    private String state;
    private String isCurrent;
}
