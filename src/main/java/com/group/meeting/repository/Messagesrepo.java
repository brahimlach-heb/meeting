package com.group.meeting.repository;

import com.group.meeting.models.Messages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Messagesrepo extends JpaRepository<Messages,Long> {
}
