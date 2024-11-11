package com.example.TransmiApp.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TransmiApp.conversion.AssignmentDTOConverter;
import com.example.TransmiApp.dto.AssignmentDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.model.Schedule;
import com.example.TransmiApp.repository.AssignmentRepository;
import com.example.TransmiApp.service.AssignmentService;

@Service
public class AssignmentServiceImpl implements AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private AssignmentDTOConverter assignmentDTOConverter;

    @Override
    public List<Assignment> getAllAssignments() {
        return (List<Assignment>) assignmentRepository.findAll();
    }

    @Override
    public AssignmentDTO getAssignmentById(Long idAssignment) {
        Assignment assignment = assignmentRepository.findById(idAssignment).orElseThrow();
        return assignmentDTOConverter.entityToDTO(assignment);
    }

    @Override
    public AssignmentDTO createAssignment(AssignmentDTO assignmentDTO, Bus bus, Driver driver, Route route, Schedule schedule) {
        Assignment assignment = assignmentDTOConverter.DTOToEntity(assignmentDTO, bus, driver, route, schedule);
        return assignmentDTOConverter.entityToDTO(assignmentRepository.save(assignment));
    }

    @Override
    public AssignmentDTO updateAssignment(Long idAssignment, AssignmentDTO assignmentDTO, Bus bus, Driver driver, Route route, Schedule schedule) {

        Assignment existingAssignment = assignmentRepository.findById(idAssignment).orElseThrow();
        Assignment updatedAssignment = assignmentDTOConverter.DTOToEntity(assignmentDTO, bus, driver, route, schedule);
        existingAssignment.setBus(updatedAssignment.getBus());
        existingAssignment.setDriver(updatedAssignment.getDriver());
        existingAssignment.setRoute(updatedAssignment.getRoute());
        existingAssignment.setSchedule(updatedAssignment.getSchedule());
    
        return assignmentDTOConverter.entityToDTO(assignmentRepository.save(existingAssignment));
    }
    

    @Override
    public void deleteAssignment(Long idAssignment) {
        if (assignmentRepository.existsById(idAssignment)) {
            assignmentRepository.deleteById(idAssignment);
        } else {
            throw new NoSuchElementException();
        }
    }
}
