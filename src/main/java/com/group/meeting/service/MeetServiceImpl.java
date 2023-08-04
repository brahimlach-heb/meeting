package com.group.meeting.service;

import com.group.meeting.models.Meeting;
import com.group.meeting.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MeetServiceImpl implements MeetService{
    @Autowired
    MeetingRepository meetingRepository;

    public MeetServiceImpl(MeetingRepository meetingRepository) {
        this.meetingRepository = meetingRepository;
    }

    @Override
    public Meeting saveMeet(Meeting meeting) {
        return meetingRepository.save(meeting);
    }

    @Override
    public Meeting updateMeet(Meeting meeting) {
        return meetingRepository.save(meeting);
    }

    @Override
    public Meeting getMeet(Long id) {
        return meetingRepository.findById(id).get();
    }

    @Override
    public List<Meeting> getAllMeets() {
        return meetingRepository.findAll();
    }

    @Override
    public void deleteMeetById(Long id) {
        meetingRepository.deleteById(id);
    }

    @Override
    public void deleteAllMeets() {
        meetingRepository.deleteAll();
    }
}
