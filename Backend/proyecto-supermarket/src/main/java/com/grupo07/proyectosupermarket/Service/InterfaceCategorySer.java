package com.grupo07.proyectosupermarket.Service;

import com.grupo07.proyectosupermarket.Model.Category;

import java.util.List;

public interface InterfaceCategorySer {
    List<Category> listar();
    Category registrar(Category c);
    Category actualizar(Category c);
    void eliminar (Integer id);
    Category ListarId(Integer id);
}
