package com.example.avitoclone.controller;

import com.example.avitoclone.entity.CategoryEntity;
import com.example.avitoclone.entity.SubcategoryEntity;
import com.example.avitoclone.exception.UserNotFoundException;
import com.example.avitoclone.model.Subcategory;
import com.example.avitoclone.service.CategoryService;
import com.example.avitoclone.service.SubcategoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@Tag(name = "SubcategoryController", description = "API контролера по работе с подкатегориями")
@RequestMapping("/subcategories")
public class SubcategoryController {
    @Autowired
    private SubcategoryService subcategoryService;

    @PostMapping
    @Operation(description =("Создание податегории"))
    public ResponseEntity registration(@RequestBody SubcategoryEntity subcategory, @RequestParam Long categoryId) {
        try {
            subcategoryService.registration(subcategory, categoryId);
            return ResponseEntity.ok("податегория сохранена");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибкаd");
        }
    }

    @GetMapping
    @Operation(description =("Получение всех податегорий"))
    public ResponseEntity getOneCategory(@RequestParam Long id) {
        try {
            return ResponseEntity.ok(subcategoryService.getOne(id));
        } catch (UserNotFoundException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }  catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }
}
