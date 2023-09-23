package com.group.meeting.repository;

import com.group.meeting.models.Meeting;
import com.group.meeting.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer>{
	User findByEmail(String email);
    User findById(Long id);
}
