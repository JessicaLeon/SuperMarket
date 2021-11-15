package com.grupo07.proyectosupermarket.Repository;

import com.grupo07.proyectosupermarket.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterfaceProductoRep extends JpaRepository<Producto, Integer> {
}
