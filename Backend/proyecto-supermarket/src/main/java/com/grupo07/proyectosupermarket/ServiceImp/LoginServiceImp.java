package com.grupo07.proyectosupermarket.ServiceImp;

import com.grupo07.proyectosupermarket.Encoder;
import com.grupo07.proyectosupermarket.Model.User;
import com.grupo07.proyectosupermarket.Repository.InterfaceLoginRep;
import com.grupo07.proyectosupermarket.Repository.InterfaceUserRep;
import com.grupo07.proyectosupermarket.Service.InterfaceLoginSer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class LoginServiceImp implements InterfaceLoginSer {
    
    @Autowired
    InterfaceLoginRep repository;

    @Override
    public User Login( String name , String password ){
        System.out.println( "BUSCANDO USUARIO -> " + name);
        User usuarioLogueado = repository.findByName( name );


        if( usuarioLogueado == null ){
            return null;
        }   
        Encoder encoder = new Encoder();        

        if(encoder.passwordEncoder().matches(password,  usuarioLogueado.getPass_user() ) ){
            return usuarioLogueado;
        } else {
            return null;
        }
    }

    @Override
    public Boolean Reset( String name , String password ){
        User user = repository.findByName(name);

        if(  user == null ){

            return false;
        } else {
            Encoder encoder = new Encoder();        

            String passencriptado = encoder.passwordEncoder().encode( password );
            user.setPass_user( passencriptado );
            
            System.out.println(passencriptado);

            repository.save(user);
            return true;
        }

    }

    @Override
    public User ListarId(Integer id) {
        return repository.findById(id).orElse(null);
    }


}
