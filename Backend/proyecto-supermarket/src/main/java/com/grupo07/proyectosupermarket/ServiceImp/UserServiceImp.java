package com.grupo07.proyectosupermarket.ServiceImp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.grupo07.proyectosupermarket.Model.User;
import com.grupo07.proyectosupermarket.Repository.InterfaceUserRep;
import com.grupo07.proyectosupermarket.Service.InterfaceUserSer;

@Service
public class UserServiceImp implements InterfaceUserSer {

    @Autowired
    InterfaceUserRep repository;

    @Override
    public List<User> listar() {
        return repository.findAll();
    }

    @Override
    public User registrar(User u) {
        System.out.println("enciodeando");
        BCryptPasswordEncoder encoder = new  BCryptPasswordEncoder();
        String encodeado = encoder.encode( u.getPass_user() ) ;
        u.setPass_user( encodeado);
        System.out.println(encodeado);
        return repository.save(u);

    }

    @Override
    public User actualizar(User u) {
        BCryptPasswordEncoder encoder = new  BCryptPasswordEncoder();
        String encodeado = encoder.encode( u.getPass_user() ) ;
        u.setPass_user( encodeado);
        return repository.save(u);
    }

    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public User ListarId(Integer id) {
        return repository.findById(id).orElse(null);
    }
} 