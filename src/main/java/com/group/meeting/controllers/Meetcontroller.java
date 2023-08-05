package com.group.meeting.controllers;

import com.group.meeting.models.Meeting;
import com.group.meeting.service.Iservice.MeetService;
import com.group.meeting.service.MeetServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Meetcontroller {
    @Autowired
    MeetService MS;
    @GetMapping("/getmeetings")
    public List<Meeting> get_meet(){
        return MS.getAllMeets();
    }
}
