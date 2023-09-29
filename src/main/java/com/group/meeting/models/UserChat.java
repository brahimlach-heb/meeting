package com.group.meeting.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class UserChat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long chatid;
    private Long Idreciver;
    private LocalDateTime lastread;
    @OneToMany(mappedBy = "userChat")
    @JsonManagedReference
    private List<Messages> messagesList=new ArrayList<>();
    @ManyToOne
    @JsonBackReference
    private User sender;
    public UserChat(LocalDateTime lastread) {
        this.lastread = lastread;
    }

    public UserChat() {
    }
}
