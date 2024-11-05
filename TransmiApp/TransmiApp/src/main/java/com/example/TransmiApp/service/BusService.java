package com.example.TransmiApp.service;

import java.util.List;

import com.example.TransmiApp.dto.BusDTO;
import com.example.TransmiApp.model.Bus;

public interface BusService {
    List<Bus> getAllBuses();
    BusDTO getBusById(Long idBus);
    BusDTO createBus(BusDTO busDTO);
    BusDTO updateBus(Long idBus, BusDTO busDTO);
    void deleteBus(Long idBus);
}
