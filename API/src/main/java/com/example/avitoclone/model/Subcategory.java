package com.example.avitoclone.model;

import com.example.avitoclone.entity.SubcategoryEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Subcategory {
    private Long id;
    private String title;
    private List<Product> products;


    public static Subcategory toModel(SubcategoryEntity entity){
        Subcategory model = new Subcategory();
        model.setId(entity.getId());
        model.setTitle(entity.getTitle());
        model.setProducts(entity.getProduct().stream().map(Product::toModel).collect(Collectors.toList()));
        return model;
    }
}

