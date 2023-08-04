package com.group.meeting.repository;

import com.group.meeting.models.Meeting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MeetingRepository  extends JpaRepository<Meeting, Long> {
}
