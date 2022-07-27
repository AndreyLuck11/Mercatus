package com.example.avitoclone.service;

import com.example.avitoclone.dto.ProductDTO;
import com.example.avitoclone.entity.CategoryEntity;
import com.example.avitoclone.entity.ProductEntity;
import com.example.avitoclone.entity.SubcategoryEntity;
import com.example.avitoclone.entity.UserEntity;
import com.example.avitoclone.mapper.ProductMapper;
import com.example.avitoclone.model.Product;
import com.example.avitoclone.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public  class ProductService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private SubcategoryRepository subcategoryRepository;


    private final ProductMapper productMapper;
//    private final Product product;




    public Product registration(ProductEntity product, String username , Long categoryId, Long subcategoryId){
        UserEntity user = userRepository.findByUsername(username);
        product.setUser(user);

        CategoryEntity category = categoryRepository.findById(categoryId).get();
        product.setCategory(category);

        SubcategoryEntity subcategory = subcategoryRepository.findById(subcategoryId).get();
        product.setSubcategory(subcategory);

        return Product.toModel(productRepository.save(product));
    }

//    public Product getPoductsWithCategory(Long id){
//        List<Product> products = productRepository.findByCategoryId(id);
//        return Product.toModel(product);
//    }

    public List<ProductDTO> getByTitle(String title){
        return productRepository.findByTitleLikeIgnoreCase(title).stream().map(productMapper::productToProductDTO).collect(Collectors.toList());
    }


    public Product getOne(Long id){
        ProductEntity product = productRepository.findById(id).get();
        return Product.toModel(product);
    }
//
    public Long delete(Long id){
        productRepository.deleteById(id);
        return id;
    }
}
