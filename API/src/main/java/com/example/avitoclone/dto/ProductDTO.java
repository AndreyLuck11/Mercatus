package com.example.avitoclone.dto;

import com.example.avitoclone.entity.ImageEntity;
import com.example.avitoclone.model.Image;
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
@Schema(description = "Транспортный объект продукта")
public class ProductDTO {
    private Long id;
    private String title;
    private String description;
    private float price;
    private List<ImageDTO> image;
}
