package com.grupo07.proyectosupermarket.Controller;

import com.grupo07.proyectosupermarket.Model.Category;
import com.grupo07.proyectosupermarket.Service.InterfaceCategorySer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    InterfaceCategorySer service;

    @GetMapping
    public ResponseEntity<List<Category>> listar(){
        List<Category> obj = service.listar();
        return new ResponseEntity<List<Category>>(obj, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Category> registrar(@RequestBody Category c){
        Category obj = service.registrar(c);
        return new ResponseEntity<Category>(obj, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Category> actualizar(@RequestBody Category c){
        Category obj = service.actualizar(c);
        return new ResponseEntity<Category>(obj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception{
        Category obj= service.ListarId(id);
        if(obj == null){
            throw new Exception("No se encontro el ID");
        }
        service.eliminar(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> ListarId(@PathVariable("id") Integer id) throws Exception{
        Category obj= service.ListarId(id);
        if(obj == null){
            throw new Exception("No se encontro el ID");
        }
        return new ResponseEntity<Category>(obj, HttpStatus.OK);
    }



}

