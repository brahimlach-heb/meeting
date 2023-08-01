package com.group.meeting.repository;

import com.group.meeting.models.Meeting_table;
import org.springframework.data.jpa.repository.JpaRepository;

public interface meeting_repository extends JpaRepository<Meeting_table, Long> {

}
