package com.group.meeting.service.Iservice;

import com.group.meeting.models.Meeting;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MeetService {
    Meeting saveMeet(Meeting meeting,Long id);
    Meeting updateMeet(Meeting meeting,Long id);
    Meeting getMeet(Long id);
    List<Meeting> getAllMeets(Long id);
    void deleteMeetById(Long id);
    void deleteAllMeets();
    Object testfunction(Meeting meeting,Long id);

}
