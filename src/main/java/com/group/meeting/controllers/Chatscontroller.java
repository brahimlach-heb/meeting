package com.group.meeting.controllers;

import com.group.meeting.models.Messages;
import com.group.meeting.models.User;
import com.group.meeting.models.UserChat;
import com.group.meeting.service.Chatsservice;
import jakarta.validation.constraints.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
public class Chatscontroller {
    @Autowired
    Chatsservice chatsservice;
    @GetMapping("/amis/{iduser}")
    public User searchamis(@PathVariable Long iduser){
        return chatsservice.search(iduser);
    }
    @GetMapping("/chatlist/{iduser}")
    public List<User> chatlist(@PathVariable Long iduser){
        return chatsservice.listamis(iduser);
    }
    @GetMapping("/savemessage/{iduser}/{idr}/{text}")
    public UserChat savemessage(@PathVariable Long iduser,@PathVariable Long idr,@PathVariable String text){
        Messages messages=new Messages();
        messages.setText(text);
        return chatsservice.savemessage(iduser,idr,messages);
    }
}
