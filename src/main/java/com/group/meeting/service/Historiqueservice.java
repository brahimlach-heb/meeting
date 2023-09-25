package com.group.meeting.service;

import com.group.meeting.models.Historique;
import com.group.meeting.models.Meeting;
import com.group.meeting.models.User;
import com.group.meeting.repository.Historiquerepo;
import com.group.meeting.repository.MeetingRepository;
import com.group.meeting.repository.UserRepo;
import com.group.meeting.service.Iservice.Ihistorique;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class Historiqueservice implements Ihistorique {
    @Autowired
    Historiquerepo historiquerepo;
    @Autowired
    MeetingRepository meetingRepository;
    @Autowired
    UserRepo userRepo;

    @Override
    public Object save_and_delete(Long idmeet, Long iduser) {
        Meeting meeting=new Meeting();
        meeting.setTitle("khkh");
        meetingRepository.save(meeting);
        User user=new User();
        user.setEmail("5arya@gmail.com");
        user.setPass("1230");
        userRepo.save(user);
        try {
            User user1=userRepo.findById(iduser);
            Meeting meeting1=meetingRepository.findById(idmeet).get();
            Historique historique=new Historique(meeting1,user1);
            user1.getHistoriqueList().add(historique);
            historiquerepo.save(historique);
            meetingRepository.deleteById(idmeet);
            return user1;
        }catch (Error error){
            return "achhadchi";
        }


    }

    @Override
    public List<Historique> GetAllHistory(Long iduser){
        User user=userRepo.findById(iduser);
        return user.getHistoriqueList();
    }
}
