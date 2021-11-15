package com.grupo07.proyectosupermarket.ServiceImp;

import com.grupo07.proyectosupermarket.Model.Producto;
import com.grupo07.proyectosupermarket.Repository.InterfaceProductoRep;
import com.grupo07.proyectosupermarket.Service.InterfaceProductoSer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductoServiceImp implements InterfaceProductoSer{

    @Autowired
    InterfaceProductoRep repository;

    @Override
    public List<Producto> listar() {
        return repository.findAll();
    }

    @Override
    public Producto registrar(Producto p) {
        return repository.save(p);
    }

    @Override
    public Producto actualizar(Producto p) {
        return repository.save(p);
    }

    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);

    }

    @Override
    public Producto ListarId(Integer id) {
        return repository.findById(id).orElse(null);
    }
}
