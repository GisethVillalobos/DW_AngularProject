package com.example.TransmiApp.controller;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.example.TransmiApp.dto.AssignmentDTO;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.model.Schedule;
import com.example.TransmiApp.repository.BusRepository;
import com.example.TransmiApp.repository.DriverRepository;
import com.example.TransmiApp.repository.RouteRepository;
import com.example.TransmiApp.repository.ScheduleRepository;
import com.example.TransmiApp.service.AssignmentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/assignment")
public class AssignmentController {
    
    @Autowired
    private BusRepository busRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private AssignmentService assignmentService;

    @Secured({"ROLE_ADMIN", "ROLE_COORDI"})
    @PostMapping("/create")
    @ResponseStatus(value = HttpStatus.CREATED)
    public AssignmentDTO createAssignment(@RequestBody AssignmentDTO assignmentDTO) {

        Bus bus = busRepository.findById(assignmentDTO.getIdBus())
                    .orElseThrow(() -> new NoSuchElementException("Bus not found with id: " + assignmentDTO.getIdBus()));
        Driver driver = driverRepository.findById(assignmentDTO.getIdDriver())
                    .orElseThrow(() -> new NoSuchElementException("Driver not found with id: " + assignmentDTO.getIdDriver()));
        Route route = routeRepository.findById(assignmentDTO.getIdRoute())
                    .orElseThrow(() -> new NoSuchElementException("Route not found with id: " + assignmentDTO.getIdRoute()));
        Schedule schedule = scheduleRepository.findById(assignmentDTO.getIdSchedule())
                    .orElseThrow(() -> new NoSuchElementException("Schedule not found with id: " + assignmentDTO.getIdSchedule()));
        // Pass the correct parameters to createAssignment
        return assignmentService.createAssignment(assignmentDTO, bus, driver, route, schedule);
    }

    @Secured({"ROLE_ADMIN", "ROLE_COORDI"})
    @GetMapping("/all")
    @ResponseStatus(value = HttpStatus.OK)
    public List<AssignmentDTO> findAllAssignments() {
        return assignmentService.getAllAssignments();
    }

    @Secured({"ROLE_ADMIN", "ROLE_COORDI"})
    @GetMapping("/read/{idAssignment}")
    @ResponseStatus(value = HttpStatus.OK)
    public AssignmentDTO findById(@PathVariable Long idAssignment) {
        return assignmentService.getAssignmentById(idAssignment);
    }

    @Secured({"ROLE_ADMIN", "ROLE_COORDI"})
    @PutMapping(value = "/update/{idAssignment}")
    @ResponseStatus(value = HttpStatus.OK)
    public AssignmentDTO updateAssignment(@PathVariable Long idAssignment, @RequestBody AssignmentDTO assignmentDTO) {

        Bus bus = busRepository.findById(assignmentDTO.getIdBus())
                    .orElseThrow(() -> new NoSuchElementException("Bus not found with id: " + assignmentDTO.getIdBus()));
        Driver driver = driverRepository.findById(assignmentDTO.getIdDriver())
                    .orElseThrow(() -> new NoSuchElementException("Driver not found with id: " + assignmentDTO.getIdDriver()));
        Route route = routeRepository.findById(assignmentDTO.getIdRoute())
                    .orElseThrow(() -> new NoSuchElementException("Route not found with id: " + assignmentDTO.getIdRoute()));
        Schedule schedule = scheduleRepository.findById(assignmentDTO.getIdSchedule())
                    .orElseThrow(() -> new NoSuchElementException("Schedule not found with id: " + assignmentDTO.getIdSchedule()));

        return assignmentService.updateAssignment(idAssignment, assignmentDTO, bus, driver, route, schedule);
    }

    @Secured({"ROLE_ADMIN", "ROLE_COORDI"})
    @DeleteMapping("/delete/{idAssignment}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAssignment(@PathVariable Long idAssignment) {
        assignmentService.deleteAssignment(idAssignment);
    }
}
