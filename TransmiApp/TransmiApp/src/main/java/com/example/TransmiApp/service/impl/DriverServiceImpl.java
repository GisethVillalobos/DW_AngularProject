package com.example.TransmiApp.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.TransmiApp.conversion.DriverDTOConverter;
import com.example.TransmiApp.dto.DriverDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.repository.AssignmentRepository;
import com.example.TransmiApp.repository.DriverRepository;
import com.example.TransmiApp.service.DriverService;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private DriverDTOConverter driverDTOConverter;

    @Override
    public List<Driver> getAllDrivers() {
        return (List<Driver>) driverRepository.findAll();
    }

    @Override
    public List<Long> getDriverIds() {
        return driverRepository.findAllDriverIdDrivers();
    }

    @Override
    public DriverDTO getDriverById(Long idDriver) {
        Driver driver = driverRepository.findById(idDriver).orElseThrow();
        return driverDTOConverter.entityToDTO(driver);
    }

    @Override
    public DriverDTO createDriver(DriverDTO driverDTO) {
        Driver driver = driverDTOConverter.DTOToEntity(driverDTO);
        return driverDTOConverter.entityToDTO(driverRepository.save(driver));
    }

    @Override
    public DriverDTO updateDriver(Long idDriver, DriverDTO driverDTO) {
        Driver driver = driverDTOConverter.DTOToEntity(driverDTO);
        Driver existingDriver = driverRepository.findById(idDriver).orElseThrow();

        existingDriver.setName(driver.getName());
        existingDriver.setIdentification(driver.getIdentification());
        existingDriver.setPhone(driver.getPhone());
        existingDriver.setAddress(driver.getAddress());
        existingDriver.setAssignments(driver.getAssignments());

        return driverDTOConverter.entityToDTO(driverRepository.save(existingDriver));
    }

    @Override
    @Transactional
    public void deleteDriver(Long idDriver) {

        Driver driver = driverRepository.findById(idDriver).orElseThrow(() -> new NoSuchElementException("Driver not found"));

        // Setting driver null for all assignments
        List<Assignment> assignments = assignmentRepository.findByDriver(driver);

        for (Assignment assignment : assignments) {
            if(assignment.getDriver().getIdDriver().equals(idDriver)) {
                assignment.setDriver(null);
                assignmentRepository.save(assignment);
            }
        } 
        driverRepository.deleteById(idDriver);
    }
}
