package com.group.meeting.service;

import com.group.meeting.models.Messages;
import com.group.meeting.models.User;
import com.group.meeting.models.UserChat;
import com.group.meeting.repository.Chatsrepo;
import com.group.meeting.repository.Messagesrepo;
import com.group.meeting.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class Chatsservice {
    @Autowired
    Chatsrepo chatsrepo;
    @Autowired
    Messagesrepo messagesrepo;
    @Autowired
    UserRepo userRepo;
    public User search(Long iduser){
        return userRepo.findById(iduser);
    }
    public List<User> listamis(Long iduser){
         List<UserChat>userChatList=userRepo.findById(iduser).getUserChats();
         List<User>userList=new ArrayList<>();
         for (UserChat chat:userChatList){
             userList.add(userRepo.findById(chat.getIdreciver()));
         }
         return new ArrayList<>(new HashSet<>(userList));
    }
   public UserChat savemessage(Long iduser, Long idr, Messages message){
               UserChat userChat=new UserChat();
               userChat.setSender(userRepo.findById(iduser));
               userChat.setIdreciver(idr);
               userChat.getMessagesList().add(message);
               message.setUserChat(userChat);
               LocalDateTime localDateTime=LocalDateTime.now();
               message.setDatemessage(localDateTime);
               messagesrepo.save(message);
               chatsrepo.save(userChat);
        return userChat;
   }
}
