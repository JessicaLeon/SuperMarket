package com.grupo07.proyectosupermarket.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.grupo07.proyectosupermarket.Model.User;

public interface InterfaceUserRep extends JpaRepository<User, Integer> {
}
