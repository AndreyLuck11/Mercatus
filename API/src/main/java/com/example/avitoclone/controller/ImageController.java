package com.example.avitoclone.controller;

import com.example.avitoclone.entity.ImageEntity;
import com.example.avitoclone.entity.ProductEntity;
import com.example.avitoclone.model.Image;
import com.example.avitoclone.repository.ImageRepository;
import com.example.avitoclone.repository.ProductRepository;
import com.example.avitoclone.service.ImageService;
import com.example.avitoclone.util.ImageUtility;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;


@RestController
@Tag(name = "Image", description = "API контролера по работе с изображениями")
@CrossOrigin()
public class ImageController {
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ImageService imageService;


    @PostMapping("/upload/image")
    @Operation(description =("Загрузка изображения"))
    public ResponseEntity<ImageUploadResponse> uplaodImage(@RequestParam Long productId,@RequestParam("image") MultipartFile file)
            throws IOException {


        ProductEntity product = productRepository.findById(productId).get();
        Image.toModel(
        imageRepository.save(ImageEntity.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .image(ImageUtility.compressImage(file.getBytes())).product(product)
                .build()));



        return ResponseEntity.status(HttpStatus.OK)
                .body(new ImageUploadResponse("ImageEntity uploaded successfully: " +
                        file.getOriginalFilename()));
    }

    @GetMapping(path = {"/get/image/info/{id}"})
    @Operation(description =("Получения информации о изображении"))
    public ImageEntity getImageDetails(@PathVariable("name") Long id) throws IOException {

        final Optional<ImageEntity> dbImage = imageRepository.findById(id);

        return ImageEntity.builder()
                .name(dbImage.get().getName())
                .type(dbImage.get().getType())
                .image(ImageUtility.decompressImage(dbImage.get().getImage())).build();
    }

    @GetMapping(path = {"/get/image/{id}"})
    @Operation(description =("Получения изображения с сервера"))
    public ResponseEntity<byte[]> getImage(@PathVariable("id") Long id) throws IOException {

        final Optional<ImageEntity> dbImage = imageRepository.findById(id);

        return ResponseEntity
                .ok()
                .contentType(MediaType.valueOf(dbImage.get().getType()))
                .body(ImageUtility.decompressImage(dbImage.get().getImage()));
    }
}
