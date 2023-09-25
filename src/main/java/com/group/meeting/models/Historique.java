package com.group.meeting.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.Optional;

@Entity
@Data
public class Historique extends Meeting{





    @ManyToOne
    @JsonBackReference
    private User user;
    public Historique() {
        super();
    }
    public Historique(Meeting meeting,User user) {
        super(meeting);
        this.user=user;
    }

}
