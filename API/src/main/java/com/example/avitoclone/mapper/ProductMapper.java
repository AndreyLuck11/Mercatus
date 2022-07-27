package com.example.avitoclone.mapper;

import com.example.avitoclone.dto.ProductDTO;
import com.example.avitoclone.entity.ProductEntity;
import com.example.avitoclone.model.Product;
import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
 public interface ProductMapper {

    ProductDTO productToProductDTO(ProductEntity entity);
}
