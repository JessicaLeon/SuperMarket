package com.grupo07.proyectosupermarket.Service;

import com.grupo07.proyectosupermarket.Model.Producto;

import java.util.List;

public interface InterfaceProductoSer {

    List<Producto> listar();
    Producto registrar(Producto p);
    Producto actualizar(Producto p);
    void eliminar (Integer id);
    Producto ListarId(Integer id);
}
