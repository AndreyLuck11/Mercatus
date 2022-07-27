package com.example.avitoclone.model;

import com.example.avitoclone.entity.ImageEntity;
import com.example.avitoclone.entity.ProductEntity;

import javax.persistence.Id;
import java.util.List;
import java.util.stream.Collectors;


public class Product {
    private Long id;
    private String title;
    private String description;
    private float price;
    private List<Image> image;
    private static List<Image> firstImage;


    public  static  Product toModel(ProductEntity entity){
        Product model = new Product();
        model.setId(entity.getId());
        model.setDescription(entity.getDescription());
        model.setTitle(entity.getTitle());
        model.setPrice(entity.getPrice());
        if (entity.getImage() == null){
            model.setImage(firstImage);
        } else {
            model.setImage(entity.getImage().stream().map(Image::toModel).collect(Collectors.toList()));
        }
        return model;
    }

    public Product(){

    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public List<Image> getImage() {
        return image;
    }

    public void setImage(List<Image> image) {
        this.image = image;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
