package com.example.TransmiApp.conversion;

import org.springframework.stereotype.Component;

import com.example.TransmiApp.dto.AssignmentDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.model.Schedule;

@Component
public class AssignmentDTOConverter {
    
    public AssignmentDTO entityToDTO(Assignment assignment) {
        return new AssignmentDTO(
            assignment.getIdAssignment(),
            assignment.getBus() != null ? assignment.getBus().getIdBus() : null,
            assignment.getDriver() != null ? assignment.getDriver().getIdDriver() : null,
            assignment.getRoute() != null ? assignment.getRoute().getIdRoute() : null,
            assignment.getSchedule() != null ? assignment.getSchedule().getIdSchedule() : null
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
