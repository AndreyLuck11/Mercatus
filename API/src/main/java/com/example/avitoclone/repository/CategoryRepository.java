package com.example.avitoclone.repository;

import com.example.avitoclone.entity.CategoryEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface CategoryRepository extends CrudRepository<CategoryEntity, Long> {
//    Optional<CategoryEntity> findById(Long id);
    List<CategoryEntity> findAll();
}


// добавить слои, мапинг, ошибки обр, использовать анотации ламбок авторизация