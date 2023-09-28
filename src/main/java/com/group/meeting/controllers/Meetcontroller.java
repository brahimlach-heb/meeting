package com.group.meeting.controllers;

import com.group.meeting.models.Meeting;
import com.group.meeting.service.Iservice.MeetService;
import com.group.meeting.service.MeetServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class Meetcontroller {
    @Autowired
    MeetService MS;
    @GetMapping("/getmeetings/{iduser}")
    public List<Meeting> get_meet(@PathVariable Long iduser){
        return MS.getAllMeets(iduser);
    }


    @PostMapping("/save/{id}")
    public  Meeting saveMeet(@RequestBody Meeting meeting,@PathVariable Long id){
        return MS.saveMeet(meeting,id);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Map<String, String>> updateMeet(@PathVariable Long id, @RequestBody Meeting meeting) {

        // Your logic here...
        MS.updateMeet(meeting,id);
        Map<String, String> response = new HashMap<>();
        response.put("message", "hello brahim");

        return ResponseEntity.ok(response);
    }
    //@PutMapping("/update")
    //public Meeting updateMeet(@RequestBody Meeting meeting){
      //  return MS.updateMeet(meeting);
    //}

    @DeleteMapping("/delete/{id}")
    public void deleteMeet(@PathVariable Long id){
        MS.deleteMeetById(id);
    }
    @GetMapping("getMeet/{id}")
    public Meeting getMeetingById(@PathVariable Long id) {
        return MS.getMeet(id);}

}
