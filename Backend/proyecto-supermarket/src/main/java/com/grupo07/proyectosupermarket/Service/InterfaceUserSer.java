package com.grupo07.proyectosupermarket.Service;

import java.util.List;

import com.grupo07.proyectosupermarket.Model.User;

public interface InterfaceUserSer {
    List<User> listar();
    User registrar(User u);
    User actualizar(User u);
    void eliminar (Integer id);
    User ListarId(Integer id);
}
