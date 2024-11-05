package com.example.TransmiApp.service;

import java.util.List;

import com.example.TransmiApp.dto.DriverDTO;
import com.example.TransmiApp.model.Driver;

public interface DriverService {
    List<Driver> getAllDrivers();
    DriverDTO getDriverById(Long idDriver);
    DriverDTO createDriver(DriverDTO driverDTO);
    DriverDTO updateDriver(Long idDriver, DriverDTO driverDTO);
    void deleteDriver(Long idDriver);
}
