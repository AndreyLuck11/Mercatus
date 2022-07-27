package com.example.avitoclone.dto;

import com.example.avitoclone.entity.SubcategoryEntity;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект категорий")
public class CategoryDTO {
    private Long id;
    private String title;
    private List<SubcategoryDTO> subcategory;
}
