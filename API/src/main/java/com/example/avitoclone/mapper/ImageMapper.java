package com.example.avitoclone.mapper;

import com.example.avitoclone.dto.ImageDTO;
import com.example.avitoclone.entity.ImageEntity;
import org.mapstruct.Mapper;

import static org.mapstruct.ReportingPolicy.IGNORE;

@Mapper(componentModel = "spring", unmappedTargetPolicy = IGNORE)
public interface ImageMapper {
    ImageDTO imageToImageDTO(ImageEntity entity);
}
