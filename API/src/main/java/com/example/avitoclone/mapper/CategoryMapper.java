package com.example.avitoclone.mapper;

import com.example.avitoclone.dto.CategoryDTO;
import com.example.avitoclone.entity.CategoryEntity;
import org.mapstruct.Mapper;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface CategoryMapper {
    CategoryDTO categoryToCategoryDTO(CategoryEntity entity);
}
