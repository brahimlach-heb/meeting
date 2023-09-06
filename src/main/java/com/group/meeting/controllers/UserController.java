package com.group.meeting.controllers;

import com.group.meeting.models.User;
import com.group.meeting.service.Iservice.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private IUserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> addUser(@RequestBody User user){
		System.out.println("user added: "+user);
		return ResponseEntity.status(200).body(userService.registerUser(user));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authUser(@RequestBody User user){
		return ResponseEntity.status(200).body(userService.authenticateUser(user));
	}
}
