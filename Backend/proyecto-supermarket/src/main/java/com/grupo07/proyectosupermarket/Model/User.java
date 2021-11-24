package com.grupo07.proyectosupermarket.Model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_user;

    @Column(name="username", length = 20, nullable = false)
    private String user_name;

    @Column(name="password", length = 256, nullable = false)
    private String pass_user;

    @Column(name="email", length = 20, nullable = true)
    private String email_user;

    @Column(name="name", length = 20, nullable = true)
    private String name_user;

    @Column(name="lastname", length = 20, nullable = true)
    private String lastname_user;

    @Column(name="role", length = 20, nullable = false)
    private String role_user;

    @Column(name="creation_day", nullable = false)
    private Date date_user;

    public Integer getId_user() {
        return id_user;
    }

    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }

    public String getName_user() {
        return name_user;
    }

    public void setName_user(String name_user) {
        this.name_user = name_user;
    }

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getPass_user() {
		return pass_user;
	}

	public void setPass_user(String pass_user) {
		this.pass_user = pass_user;
	}

	public String getEmail_user() {
		return email_user;
	}

	public void setEmail_user(String email_user) {
		this.email_user = email_user;
	}

	public String getLastname_user() {
		return lastname_user;
	}

	public void setLastname_user(String lastname_user) {
		this.lastname_user = lastname_user;
	}

	public String getRole_user() {
		return role_user;
	}

	public void setRole_user(String role_user) {
		this.role_user = role_user;
	}

	public Date getDate_user() {
		return date_user;
	}

	public void setDate_user(Date date_user) {
		this.date_user = date_user;
	}
}