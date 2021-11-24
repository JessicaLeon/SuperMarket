package com.grupo07.proyectosupermarket.Repository;

import com.grupo07.proyectosupermarket.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface InterfaceLoginRep extends JpaRepository<User, Integer> {
    
    @Query(value = "SELECT * FROM user WHERE username = ?1", nativeQuery = true)
    public User findByName(String name);
}

