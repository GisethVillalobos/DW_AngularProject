package com.example.TransmiApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.TransmiApp.dto.AssignmentDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.model.Schedule;
import com.example.TransmiApp.service.AssignmentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/assignment")
public class AssignmentController {

    @Autowired
    private AssignmentService assignmentService;

    @PostMapping("/create")
    @ResponseStatus(value = HttpStatus.CREATED)
    public AssignmentDTO createAssignment(@RequestBody AssignmentDTO assignmentDTO, 
                                          @RequestParam Bus bus, 
                                          @RequestParam Driver driver, 
                                          @RequestParam Route route, 
                                          @RequestParam Schedule schedule) {
        // Pass the correct parameters to createAssignment
        return assignmentService.createAssignment(assignmentDTO, bus, driver, route, schedule);
    }

    @GetMapping("/all")
    @ResponseStatus(value = HttpStatus.OK)
    public List<Assignment> findAllAssignments() {
        return assignmentService.getAllAssignments();
    }

    @GetMapping("/read/{idAssignment}")
    @ResponseStatus(value = HttpStatus.OK)
    public AssignmentDTO findById(@PathVariable Long idAssignment) {
        return assignmentService.getAssignmentById(idAssignment);
    }

    @PutMapping(value = "/update/{idAssignment}")
    @ResponseStatus(value = HttpStatus.OK)
    public AssignmentDTO updateAssignment(@PathVariable Long idAssignment, 
                                          @RequestBody AssignmentDTO assignmentDTO, 
                                          @RequestParam Bus bus, 
                                          @RequestParam Driver driver, 
                                          @RequestParam Route route, 
                                          @RequestParam Schedule schedule) {
        return assignmentService.updateAssignment(idAssignment, assignmentDTO, bus, driver, route, schedule);
    }

    @DeleteMapping("/delete/{idAssignment}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteAssignment(@PathVariable Long idAssignment) {
        assignmentService.deleteAssignment(idAssignment);
    }
}
