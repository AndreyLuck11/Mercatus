package com.example.avitoclone.model;

import com.example.avitoclone.entity.ImageEntity;

public class Image {
    private Long id;

    public static Image toModel(ImageEntity entity){
        Image model = new Image();
        model.setId(entity.getId());
        return model;
    }

    public Image(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


}
