package com.example.avitoclone.mapper;

import com.example.avitoclone.dto.SubcategoryDTO;
import com.example.avitoclone.entity.SubcategoryEntity;
import org.mapstruct.Mapper;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface SubcategoryMapper {
    SubcategoryDTO subcategoryToSubcategoryDTO(SubcategoryEntity entity);
}
