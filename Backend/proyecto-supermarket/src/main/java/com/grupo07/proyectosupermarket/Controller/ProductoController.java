package com.grupo07.proyectosupermarket.Controller;

import com.grupo07.proyectosupermarket.Model.Producto;
import com.grupo07.proyectosupermarket.Service.InterfaceProductoSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private InterfaceProductoSer service;


    @GetMapping
    public ResponseEntity<List<Producto>> listar(){
        List<Producto> obj = service.listar();
        return new ResponseEntity<List<Producto>>(obj, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Void> registrar(@RequestBody Producto p){

        Producto obj = service.registrar(p);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId_producto()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping
    public ResponseEntity<Producto> actualizar(@RequestBody Producto p){
        Producto obj = service.actualizar(p);
        return new ResponseEntity<Producto>(obj, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable("id") Integer id) throws Exception{
        Producto obj= service.ListarId(id);
        if(obj == null){
            throw new Exception("No se encontro el ID");
        }
        service.eliminar(id);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> ListarId(@PathVariable("id") Integer id) throws Exception{
        Producto obj= service.ListarId(id);
        if(obj == null){
            throw new Exception("No se encontro el ID");
        }
        return new ResponseEntity<Producto>(obj, HttpStatus.OK);
    }
}

