package com.grupo07.proyectosupermarket.Repository;

import com.grupo07.proyectosupermarket.Model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterfaceCategoryRep extends JpaRepository<Category, Integer> {
}
