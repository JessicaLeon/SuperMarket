package com.grupo07.proyectosupermarket.Service;

import com.grupo07.proyectosupermarket.Model.User;

public interface InterfaceLoginSer {
    User Login( String name , String password );
    Boolean Reset( String name , String password );    
    User ListarId(Integer id);
}
