package com.group.meeting.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class Messages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idmessage;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "Chat_id")
    @JsonBackReference
    private UserChat userChat;
    private String text;
    private LocalDateTime datemessage;

    public Messages(UserChat userChat, String text, LocalDateTime datemessage) {
        this.userChat = userChat;
        this.text = text;
        this.datemessage = datemessage;
    }

    public Messages() {

    }
}
