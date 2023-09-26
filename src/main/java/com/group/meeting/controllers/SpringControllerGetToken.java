package com.group.meeting.controllers;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/spring")
public class SpringControllerGetToken {

    @Autowired
    private RestTemplate restTemplate;

    @GetMapping("/callFastAPI/{item_id}")
    public ResponseEntity<String> callFastAPI(@PathVariable int item_id) {
        String fastAPIUrl = "http://127.0.0.1:8000/generate_token/" + item_id ;
        ResponseEntity<String> response = restTemplate.getForEntity(fastAPIUrl, String.class);
        return ResponseEntity.ok(response.getBody());
    }
}


