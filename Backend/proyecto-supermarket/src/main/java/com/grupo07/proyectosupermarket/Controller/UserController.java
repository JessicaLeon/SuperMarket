package com.grupo07.proyectosupermarket.Controller;

import com.grupo07.proyectosupermarket.Model.User;
import com.grupo07.proyectosupermarket.Service.InterfaceUserSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    InterfaceUserSer service;

    @GetMapping
    public ResponseEntity<List<User>> listar(){
        List<User> obj = service.listar();
        return new ResponseEntity<List<User>>(obj, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<User> registrar(@RequestBody User c){
        User obj = service.registrar(c);
        return new ResponseEntity<User>(obj, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<User> actualizar(@RequestBody User c){
        User obj = service.actualizar(c);
        return new ResponseEntity<User>(obj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception{
        User obj= service.ListarId(id);
        if(obj == null){
            throw new Exception("No se encontro el ID");
        }
        service.eliminar(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> ListarId(@PathVariable("id") Integer id) throws Exception{
        User obj= service.ListarId(id);
        if(obj == null){
            throw new Exception("No se encontro el ID");
        }
        return new ResponseEntity<User>(obj, HttpStatus.OK);
    }



}