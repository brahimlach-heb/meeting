package com.group.meeting.service;

import com.group.meeting.dao.UserRepo;
import com.group.meeting.models.User;
import com.group.meeting.service.Iservice.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public User registerUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public User authenticateUser(User user) {
		User opUser = userRepo.findByEmail(user.getEmail());
		if(opUser.getPass().equals(user.getPass())) {
			return opUser;
		}

		return null;
	}

}
