package com.example.avitoclone.model;

import com.example.avitoclone.entity.CategoryEntity;
import com.example.avitoclone.entity.ProductEntity;
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
public class Category {
    private Long id;
    private String title;
    private List<Product> products;
//    private List<Subcategory> subcategories;



    public  static  Category toModel(CategoryEntity entity){
        Category model = new Category();
        model.setId(entity.getId());
        model.setTitle(entity.getTitle());
//        model.setProducts(entity.getProduct().stream().map(Product::toModel).collect(Collectors.toList()));
//        model.setSubcategories(entity.getSubcategory().stream().map(Subcategory::toModel).collect(Collectors.toList()));
        model.setProducts(entity.getProduct().stream().map(Product::toModel).collect(Collectors.toList()));
        return model;
    }

}
