package com.example.avitoclone.service;

import com.example.avitoclone.entity.ImageEntity;
import com.example.avitoclone.entity.ProductEntity;
import com.example.avitoclone.repository.ImageRepository;
import com.example.avitoclone.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private ProductRepository productRepository;

    public ImageEntity getProdId(ImageEntity image, Long productId){
        ProductEntity product = productRepository.findById(productId).get();
        image.setProduct(product);
        return imageRepository.save(image);
    }
}
