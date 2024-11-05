package com.example.TransmiApp.conversion;

import org.springframework.stereotype.Component;

import com.example.TransmiApp.dto.BusDTO;
import com.example.TransmiApp.model.Bus;

@Component
public class BusDTOConverter {

    public BusDTO entityToDTO(Bus bus) {
        return new BusDTO(
            bus.getIdBus(),
            bus.getPlate(),
            bus.getModel()
        );
    }

    public Bus DTOToEntity(BusDTO busDTO) {
        return new Bus(
            busDTO.getPlate(),
            busDTO.getModel()
        );
    }
}

