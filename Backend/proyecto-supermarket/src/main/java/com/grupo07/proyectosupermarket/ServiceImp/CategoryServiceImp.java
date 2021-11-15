package com.grupo07.proyectosupermarket.ServiceImp;

import com.grupo07.proyectosupermarket.Model.Category;
import com.grupo07.proyectosupermarket.Repository.InterfaceCategoryRep;
import com.grupo07.proyectosupermarket.Service.InterfaceCategorySer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryServiceImp implements InterfaceCategorySer {

    @Autowired
    InterfaceCategoryRep repository;

    @Override
    public List<Category> listar() {
        return repository.findAll();
    }

    @Override
    public Category registrar(Category c) {
        return repository.save(c);

    }

    @Override
    public Category actualizar(Category c) {
        return repository.save(c);
    }

    @Override
    public void eliminar(Integer id) {
        repository.deleteById(id);
    }

    @Override
    public Category ListarId(Integer id) {
        return repository.findById(id).orElse(null);
    }
}
