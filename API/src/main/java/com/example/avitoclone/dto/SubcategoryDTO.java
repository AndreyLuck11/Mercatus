package com.example.avitoclone.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "Транспортный объект подкатегорий")
public class SubcategoryDTO {
    private Long id;
    private String title;
}
