package com.group.meeting.service.Iservice;

import com.group.meeting.models.Historique;
import com.group.meeting.models.User;
import jakarta.jws.soap.SOAPBinding;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Objects;

public interface Ihistorique {
    User save_and_delete(Long idmeet, Long iduser);
    List<Historique> GetAllHistory(Long iduser);

}
