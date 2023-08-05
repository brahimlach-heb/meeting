package com.group.meeting.controllers;

import com.group.meeting.models.Meeting;
import com.group.meeting.service.Iservice.MeetService;
import com.group.meeting.service.MeetServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Meetcontroller {
    @Autowired
    MeetService MS;
    @GetMapping("/getmeetings")
    public List<Meeting> get_meet(){
        return MS.getAllMeets();
    }

    @PostMapping("/save")
    public  Meeting saveMeet(@RequestBody Meeting meeting){
        return MS.saveMeet(meeting);
    }

    @PutMapping("/update")
    public Meeting updateMeet(@RequestBody Meeting meeting){
        return MS.updateMeet(meeting);
    }

    @DeleteMapping("/delete?id={id}")
    public String deleteMeet(@PathVariable("id") Long id){
        MS.deleteMeetById(id);
        return "deleted";
    }
}
