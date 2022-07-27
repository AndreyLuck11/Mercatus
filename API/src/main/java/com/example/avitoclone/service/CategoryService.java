package com.example.avitoclone.service;

import com.example.avitoclone.dto.CategoryDTO;
import com.example.avitoclone.entity.CategoryEntity;
import com.example.avitoclone.exception.UserNotFoundException;
import com.example.avitoclone.mapper.CategoryMapper;
import com.example.avitoclone.model.Category;
import com.example.avitoclone.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    private final CategoryMapper categoryMapper;



    public CategoryEntity registration(CategoryEntity category) {
        return categoryRepository.save(category);
    }

    public Category getOne(Long id) throws UserNotFoundException {
        //добавить проверки
        CategoryEntity category = categoryRepository.findById(id).get();
        if (category == null) {
            throw new UserNotFoundException("Пользователь не найден");
        }
        return Category.toModel(category);

    }
    public List<CategoryDTO> getAll() {
        //добавить проверки
        return categoryRepository.findAll().stream().map(categoryMapper::categoryToCategoryDTO).collect(Collectors.toList());
    }
}
