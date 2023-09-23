package com.group.meeting.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.validator.constraints.NotEmpty;

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

	@OneToMany
	List<Historique> historiqueList;

}
