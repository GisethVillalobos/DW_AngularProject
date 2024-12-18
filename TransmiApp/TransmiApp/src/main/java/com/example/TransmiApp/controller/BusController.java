package com.example.TransmiApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.TransmiApp.dto.BusDTO;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.service.BusService;

@RestController
@RequestMapping("/api/bus")
@CrossOrigin(origins = "http://localhost:4200")
public class BusController {

    @Autowired
    private BusService busService;

    @Secured({"ROLE_COORDI"})
    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(value = HttpStatus.CREATED)
    public BusDTO createBus(@RequestBody BusDTO busDTO) {
        return busService.createBus(busDTO);
    }

    @Secured({"ROLE_COORDI", "ROLE_PASSENGER"})
    @GetMapping("/all")
    @ResponseStatus(value = HttpStatus.OK)
    public List<Bus> findAllBuss() {
        return busService.getAllBuses();
    }

    @GetMapping("/ids")
    @ResponseStatus(value = HttpStatus.OK)
    public List<Long> findAllBusIds() {
        return busService.getBusIds();
    }

    @Secured({"ROLE_COORDI", "ROLE_PASSENGER"})
    @GetMapping("/read/{idBus}")
    @ResponseStatus(value = HttpStatus.OK)
    public BusDTO findById(@PathVariable Long idBus) {
        return busService.getBusById(idBus);
    }

    @Secured({"ROLE_COORDI"})
    @PutMapping("/update/{idBus}")
    @ResponseStatus(value = HttpStatus.OK)
    public BusDTO updateBus(@PathVariable Long idBus, @RequestBody BusDTO busDTO) {
        return busService.updateBus(idBus, busDTO);
    }

    @Secured({"ROLE_COORDI"})
    @DeleteMapping("/delete/{idBus}")
    public ResponseEntity<Void> deleteBus(@PathVariable Long idBus) {
        busService.deleteBus(idBus);
        return ResponseEntity.noContent().build();
    }
}
