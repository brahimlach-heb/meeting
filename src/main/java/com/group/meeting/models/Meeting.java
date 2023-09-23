package com.group.meeting.models;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.List;
@Entity
@Table
@Data
public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    protected String title;

    @Column(name = "start_time")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    protected LocalDateTime startTime;

    @Column(name = "end_time")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    protected LocalDateTime endTime;



    @ElementCollection
    @CollectionTable(name = "meeting_attendees", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "attendee")
    protected List<String> attendees;

    public Meeting() {
    }

    public Meeting(Meeting meeting) {
        this.title = meeting.title;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public List<String> getAttendees() {
        return attendees;
    }

    public void setAttendees(List<String> attendees) {
        this.attendees = attendees;
    }
}

