package com.example.avitoclone.controller;

import com.example.avitoclone.dto.ProductDTO;
import com.example.avitoclone.entity.ProductEntity;
import com.example.avitoclone.model.Product;
import com.example.avitoclone.repository.ProductRepository;
import com.example.avitoclone.service.ProductService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/product")
@Tag(name = "ProductController", description = "API контролера по работе с задачами")
public class ProductController {

    @Autowired
    private ProductService productService;
    @Autowired
    private ProductRepository productRepository;



    @PostMapping
    @Operation(description = "Создание тровара")
    public ResponseEntity registration(@RequestBody ProductEntity product, @RequestParam String username, @RequestParam Long categoryId, @RequestParam Long subcategoryId) {
        try {
            return ResponseEntity.ok(productService.registration(product, username, categoryId, subcategoryId));
//            return ResponseEntity.ok("Продукт сохранен");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e);
        }
    }

    @GetMapping
    @Operation(description = "Получение тровара")
    public ResponseEntity getOneUser(@RequestParam Long id) {
        try {
            return ResponseEntity.ok(productService.getOne(id));
        }  catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }

//    @GetMapping("/catId")
//    @Operation(description = "Получение троваров из определенной категории")
//    public ResponseEntity getPoductsWithCategory(@RequestParam Long id) {
//        try {
//            return ResponseEntity.ok(productService.getPoductsWithCategory(id));
//        }  catch (Exception e) {
//            return ResponseEntity.badRequest().body(e);
//        }
//    }
    @GetMapping("/title")
    @Operation(description = "Получение тровара по названию")
    public ResponseEntity<List<ProductDTO>> getByTitle(@RequestParam String title) {
            return (ResponseEntity<List<ProductDTO>>) ResponseEntity.ok(productService.getByTitle(title));
    }


    @DeleteMapping("/{id}")
    @Operation(description = "Удаление тровара")
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(productService.delete(id));
//            return ResponseEntity.ok("Продукт удален");
        }  catch (Exception e) {
            return ResponseEntity.badRequest().body("Произошла ошибка");
        }
    }
}
