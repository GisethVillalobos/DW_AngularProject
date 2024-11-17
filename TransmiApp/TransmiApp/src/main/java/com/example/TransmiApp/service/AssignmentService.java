package com.example.TransmiApp.service;

import java.util.List;

import com.example.TransmiApp.dto.AssignmentDTO;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.model.Schedule;

public interface AssignmentService {
    List<AssignmentDTO> getAllAssignments();
    AssignmentDTO getAssignmentById(Long idAssignment);
    AssignmentDTO createAssignment(AssignmentDTO assignmentDTO, Bus bus, Driver driver, Route route, Schedule schedule);
    AssignmentDTO updateAssignment(Long idAssignment, AssignmentDTO assignmentDTO, Bus bus, Driver driver, Route route, Schedule schedule);
    void deleteAssignment(Long idAssignment);
}
