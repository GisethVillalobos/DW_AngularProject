package com.example.TransmiApp.conversion;

import org.springframework.stereotype.Component;

import com.example.TransmiApp.dto.DriverDTO;
import com.example.TransmiApp.model.Driver;

@Component
public class DriverDTOConverter {

    public DriverDTO entityToDTO(Driver driver) {
        return new DriverDTO(
            driver.getIdDriver(),
            driver.getName(),
            driver.getIdentification(),
            driver.getPhone(),
            driver.getAddress()
        );
    }

    public Driver DTOToEntity(DriverDTO driverDTO) {
        return new Driver(
            driverDTO.getName(),
            driverDTO.getIdentification(),
            driverDTO.getPhone(),
            driverDTO.getAddress()
        );
    }
}
