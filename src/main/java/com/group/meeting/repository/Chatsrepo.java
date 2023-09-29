package com.group.meeting.repository;

import com.group.meeting.models.UserChat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Chatsrepo extends JpaRepository<UserChat, Long> {
}
