package com.group.meeting.service.Iservice;

import com.group.meeting.models.Historique;
import com.group.meeting.models.User;
import jakarta.jws.soap.SOAPBinding;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

public interface Ihistorique {
    boolean save_and_delete(Long idmeet,Long iduser);
    User GetAllHistory(Long iduser);

}
