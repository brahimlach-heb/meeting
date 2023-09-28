package com.group.meeting.controllers;

import com.group.meeting.models.Historique;
import com.group.meeting.models.User;
import com.group.meeting.service.Historiqueservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Historiquecontroller {
    @Autowired
    Historiqueservice historiqueservice;

    @GetMapping("changecase/{idmeet}&{iduser}")
    public User saveAndDelete(@PathVariable Long idmeet,@PathVariable Long iduser) {
        return historiqueservice.save_and_delete(idmeet,iduser);
    }

    @GetMapping("GetAll/{iduser}")
    public List<Historique> GetAllHistory(@PathVariable Long iduser){
        return historiqueservice.GetAllHistory(iduser);
    }

}
