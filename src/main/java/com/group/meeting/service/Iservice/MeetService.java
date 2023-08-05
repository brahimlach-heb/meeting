package com.group.meeting.service.Iservice;

import com.group.meeting.models.Meeting;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MeetService {
    Meeting saveMeet(Meeting meeting);
    Meeting updateMeet(Meeting meeting);
    Meeting getMeet(Long id);
    List<Meeting> getAllMeets();
    void deleteMeetById(Long id);
    void deleteAllMeets();
}
