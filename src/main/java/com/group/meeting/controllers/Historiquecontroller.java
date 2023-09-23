package com.group.meeting.controllers;

import com.group.meeting.models.Historique;
import com.group.meeting.models.User;
import com.group.meeting.service.Historiqueservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Historiquecontroller {
    @Autowired
    Historiqueservice historiqueservice;

    @GetMapping("changecase")
    public boolean saveAndDelete(@RequestParam Long idmeet, @RequestParam Long iduser) {
        if (historiqueservice.save_and_delete(idmeet, iduser)) {
            return true;
        }
        return false;
    }

    @GetMapping("GetAll")
    public User GetAllHistory(@RequestParam Long iduser){
        return historiqueservice.GetAllHistory(iduser);
    }

}
