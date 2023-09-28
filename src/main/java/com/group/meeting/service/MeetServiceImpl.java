package com.group.meeting.service;

import com.group.meeting.models.Meeting;
import com.group.meeting.models.User;
import com.group.meeting.repository.MeetingRepository;
import com.group.meeting.repository.UserRepo;
import com.group.meeting.service.Iservice.MeetService;
import org.hibernate.type.TrueFalseConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetServiceImpl implements MeetService {
    @Autowired
    MeetingRepository meetingRepository;
    @Autowired
    UserRepo userRepo;

    public MeetServiceImpl(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    @Override
    public Meeting saveMeet(Meeting meeting,Long id) {
        User user=userRepo.findById(id);
        user.getMeetingList().add(meeting);
        meeting.setUser(user);
        return meetingRepository.save(meeting);
    }

    @Override
//    public Meeting updateMeet(Meeting meeting) {
//        Long meetingId = meeting.getId();
//        Meeting existingMeeting = meetingRepository.findById(meetingId)
//                .orElseThrow(() -> new IllegalArgumentException("Meeting with ID " + meetingId + " not found."));
//
//        // Update the existingMeeting object with the new values
//        existingMeeting.setTitle(meeting.getTitle());
//        existingMeeting.setStartTime(meeting.getStartTime());
//
//        return meetingRepository.save(existingMeeting);
//    }

    public Meeting updateMeet(Meeting meeting,Long id) {
        User user=userRepo.findById(id);
        meeting.setUser(user);
        return meetingRepository.save(meeting);
    }



    @Override
    public Meeting getMeet(Long id) {
        return meetingRepository.findById(id).get();
    }

    @Override
    public List<Meeting> getAllMeets(Long id) {
        return userRepo.findById(id).getMeetingList();
    }

    @Override
    public void deleteMeetById(Long id) {
        meetingRepository.deleteById(id);
    }

    @Override
    public void deleteAllMeets() {
        meetingRepository.deleteAll();
    }

    public Object testfunction(Meeting meeting,Long id){
        User user=userRepo.findById(id);
        user.getMeetingList().add(meeting);
        meeting.setUser(user);
        meetingRepository.save(meeting);
        return true;
    }

}
