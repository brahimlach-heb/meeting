package com.group.meeting.dao;

import com.group.meeting.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer>{
	User findByEmail(String email);
}
