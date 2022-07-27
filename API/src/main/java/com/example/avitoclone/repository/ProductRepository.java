package com.example.avitoclone.repository;

import com.example.avitoclone.dto.ProductDTO;
import com.example.avitoclone.entity.ProductEntity;
import com.example.avitoclone.model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ProductRepository extends CrudRepository<ProductEntity, Long> {
        @ Query (value = "select * from product where title ILIKE CONCAT('%', :title, '%')", nativeQuery = true)
        List<ProductEntity> findByTitleLikeIgnoreCase (@Param("title") String title);
}
