package com.group.meeting.service.Iservice;

import com.group.meeting.models.User;

public interface IUserService {
	User registerUser(User user);
	User authenticateUser(User user);
}
