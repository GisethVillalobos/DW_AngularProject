package com.example.TransmiApp.conversion;

import org.springframework.stereotype.Component;

import com.example.TransmiApp.dto.AssignmentDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;

@Component
public class AssignmentDTOConverter {

    public AssignmentDTO entityToDTO(Assignment assignment) {
        return new AssignmentDTO(
            assignment.getIdAssignment(),
            assignment.getBus().getIdBus(),
            assignment.getDriver().getIdDriver(),
            assignment.getRoute().getIdRoute(),
            assignment.getSchedule().getIdSchedule()
        );
    }

    public Assignment DTOToEntity(AssignmentDTO assignmentDTO, Bus bus, Driver driver, Route route, Schedule schedule) {
        return new Assignment(
            driver,
            bus,
            route,
            schedule
        );
    }
}

