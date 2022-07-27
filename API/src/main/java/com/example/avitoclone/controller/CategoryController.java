package com.example.avitoclone.controller;

import com.example.avitoclone.dto.CategoryDTO;
import com.example.avitoclone.dto.ProductDTO;
import com.example.avitoclone.entity.CategoryEntity;
import com.example.avitoclone.entity.UserEntity;
import com.example.avitoclone.exception.UserAlreadyExistException;
import com.example.avitoclone.exception.UserNotFoundException;
import com.example.avitoclone.service.CategoryService;
import com.example.avitoclone.service.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Tag(name = "CategoryController", description = "API контролера по работе с категориями")
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @PostMapping
    @Operation(description =("Создание категории"))
    public ResponseEntity registration(@RequestBody CategoryEntity category) {
        try {
            categoryService.registration(category);
            return ResponseEntity.ok("Категория сохранена");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибкаd");
        }
    }

    @GetMapping("/all")
    @Operation(description = "Получение категорий")
    public ResponseEntity<List<CategoryDTO>> getAll() {
        return (ResponseEntity<List<CategoryDTO>>) ResponseEntity.ok(categoryService.getAll());
    }

    @GetMapping
    @Operation(description =("Получение определенной категории"))
    public ResponseEntity getOneCategory(@RequestParam Long id) {
        try {
            return ResponseEntity.ok(categoryService.getOne(id));
        } catch (UserNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }  catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }


}
