package com.example.TransmiApp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TransmiApp.conversion.BusDTOConverter;
import com.example.TransmiApp.dto.BusDTO;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.repository.BusRepository;
import com.example.TransmiApp.service.BusService;

@Service
public class BusServiceImpl implements BusService {

    @Autowired
    private BusRepository busRepository;

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
    public void deleteBus(Long idBus) {
        if (busRepository.existsById(idBus)) {
            busRepository.deleteById(idBus);
        }
    }
}
