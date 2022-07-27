package com.example.avitoclone.service;

import com.example.avitoclone.entity.CategoryEntity;
import com.example.avitoclone.entity.SubcategoryEntity;
import com.example.avitoclone.exception.UserNotFoundException;
import com.example.avitoclone.model.Subcategory;
import com.example.avitoclone.repository.CategoryRepository;
import com.example.avitoclone.repository.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubcategoryService {
    @Autowired
    private SubcategoryRepository subcategoryRepository;
    @Autowired
    private CategoryRepository categoryRepository;


    public Subcategory registration(SubcategoryEntity subcategory, Long categoryId) {
        CategoryEntity category = categoryRepository.findById(categoryId).get();
        subcategory.setCategory(category);
        return Subcategory.toModel(subcategoryRepository.save(subcategory));
//        return subcategoryRepository.save(subcategory);
    }

    public Subcategory getOne(Long id) throws UserNotFoundException {
        //добавить проверки
        SubcategoryEntity subcategory = subcategoryRepository.findById(id).get();
        if (subcategory == null) {
            throw new UserNotFoundException("Пользователь не найден");
        }
        return Subcategory.toModel(subcategory);
    }
}
