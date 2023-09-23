package com.group.meeting.models;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.Optional;

@Entity
public class Historique extends Meeting{





    @ManyToOne
    private User user;
    public Historique() {
        super();
    }
    public Historique(Meeting meeting,User user) {
        super(meeting);
        this.user=user;
    }

}
