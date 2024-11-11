package com.example.TransmiApp.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.TransmiApp.conversion.BusDTOConverter;
import com.example.TransmiApp.dto.BusDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.repository.AssignmentRepository;
import com.example.TransmiApp.repository.BusRepository;
import com.example.TransmiApp.service.BusService;

@Service
public class BusServiceImpl implements BusService {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private BusDTOConverter busDTOConverter;

    @Override
    public List<Bus> getAllBuses() {
        return (List<Bus>) busRepository.findAll();
    }

    @Override
    public BusDTO getBusById(Long idBus) {
        Bus bus = busRepository.findById(idBus).orElseThrow();
        return busDTOConverter.entityToDTO(bus);
    }

    @Override
    public BusDTO createBus(BusDTO busDTO) {
        Bus bus = busDTOConverter.DTOToEntity(busDTO);
        return busDTOConverter.entityToDTO(busRepository.save(bus));
    }

    @Override
    public BusDTO updateBus(Long idBus, BusDTO busDTO) {
        Bus bus = busDTOConverter.DTOToEntity(busDTO);
        Bus existingBus = busRepository.findById(idBus).orElseThrow();

        existingBus.setPlate(bus.getPlate());
        existingBus.setModel(bus.getModel());
        existingBus.setAssignments(bus.getAssignments());
        
        return busDTOConverter.entityToDTO(busRepository.save(existingBus));
    }

    @Override
    @Transactional
    public void deleteBus(Long idBus) {
        boolean hasDriverAssigned = assignmentRepository.existsByBusIdBusAndDriverNotNull(idBus);
        if (hasDriverAssigned) {
            throw new IllegalArgumentException("No es posible eliminar este bus. Tiene un conductor asignado.");
        }
        else{

            Bus bus = busRepository.findById(idBus).orElseThrow(() -> new NoSuchElementException("Bus not found"));

            // Setting bus null for all assignments
            List<Assignment> assignments = assignmentRepository.findByBus(bus);

            for (Assignment assignment : assignments) {
                if(assignment.getBus().getIdBus().equals(idBus)) {
                    assignment.setBus(null);
                    assignmentRepository.save(assignment);
                }
            } 
            busRepository.deleteById(idBus);
        } 
    }

}
