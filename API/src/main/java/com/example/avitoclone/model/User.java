package com.example.avitoclone.model;

import com.example.avitoclone.entity.UserEntity;
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
public class User {
//    private  Long id;
    private String username;
    private String email;
    private String phone;
    private String city;
    private List<Product> products;

    public  static  User toModel(UserEntity entity){
        User model = new User();
//        model.setId(entity.getId());
        model.setUsername(entity.getUsername());
        model.setProducts(entity.getProduct().stream().map(Product::toModel).collect(Collectors.toList()));
        return model;
    }


}
