package com.group.meeting.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseEntity{
	@Column(length = 25)
	private String firstName;
	@Column(length = 25)
	private String lastName;
	@Email
	private String email;
	private String pass;

	@OneToMany(cascade = CascadeType.ALL)
	@JsonManagedReference
	List<Historique> historiqueList=new ArrayList<>();
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	@JsonManagedReference
	List<Meeting> meetingList=new ArrayList<>();
	@OneToMany(mappedBy = "sender",cascade = CascadeType.ALL)
	@JsonManagedReference
	List<UserChat> userChats=new ArrayList<>();



}
