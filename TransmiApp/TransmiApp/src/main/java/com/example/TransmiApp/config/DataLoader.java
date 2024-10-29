package com.example.TransmiApp.config;

import java.sql.Time;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.model.Schedule;
import com.example.TransmiApp.repository.AssignmentRepository;
import com.example.TransmiApp.repository.BusRepository;
import com.example.TransmiApp.repository.DriverRepository;
import com.example.TransmiApp.repository.RouteRepository;
import com.example.TransmiApp.repository.ScheduleRepository;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private BusRepository busRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        // Initializing Schedule data
        Schedule schedule1 = new Schedule(Arrays.asList("Monday", "Wednesday", "Friday"), 
                                           Time.valueOf("08:00:00"), 
                                           Time.valueOf("17:00:00"), 
                                           new ArrayList<>());
        Schedule schedule2 = new Schedule(Arrays.asList("Tuesday", "Thursday"), 
                                           Time.valueOf("10:00:00"), 
                                           Time.valueOf("15:00:00"), 
                                           new ArrayList<>());
        scheduleRepository.saveAll(List.of(schedule1, schedule2));

        // Initializing Bus data
        Bus bus1 = new Bus("ABC123", "Volvo 2010", new ArrayList<>());
        Bus bus2 = new Bus("XYZ987", "Mercedes 2015", new ArrayList<>());
        Bus bus3 = new Bus("LMN456", "Scania 2020", new ArrayList<>());
        busRepository.saveAll(List.of(bus1, bus2, bus3));

        // Initializing Driver data
        Driver driver1 = new Driver("Carlos Pérez", "123456789", "555-1234", "Calle 10 #5-30", new ArrayList<>());
        Driver driver2 = new Driver("Ana García", "987654321", "555-5678", "Calle 20 #6-15", new ArrayList<>());
        Driver driver3 = new Driver("Luis Torres", "555666777", "555-9876", "Calle 30 #7-40", new ArrayList<>());
        driverRepository.saveAll(List.of(driver1, driver2, driver3));

        // Initializing Route data
        Route route1 = new Route("R001", Arrays.asList("Station A", "Station B", "Station C"), new ArrayList<>());
        Route route2 = new Route("R002", Arrays.asList("Station D", "Station E", "Station F"), new ArrayList<>());
        routeRepository.saveAll(List.of(route1, route2));

        // Initializing Assignment data
        Assignment assignment1 = new Assignment(driver1, bus1, route1, schedule1);
        Assignment assignment2 = new Assignment(driver2, bus2, route2, schedule2);
        Assignment assignment3 = new Assignment(driver3, bus3, route1, schedule2);

        assignmentRepository.saveAll(List.of(assignment1, assignment2, assignment3));

        // Adding Assignments to each corresponding entity
        addAssignmentsToEntities(driver1, bus1, route1, schedule1, assignment1);
        addAssignmentsToEntities(driver2, bus2, route2, schedule2, assignment2);
        addAssignmentsToEntities(driver3, bus3, route1, schedule2, assignment3);

        // Saving changes
        driverRepository.saveAll(List.of(driver1, driver2, driver3));
        busRepository.saveAll(List.of(bus1, bus2, bus3));
        routeRepository.saveAll(List.of(route1, route2));
        scheduleRepository.saveAll(List.of(schedule1, schedule2));
    }

    private void addAssignmentsToEntities(Driver driver, Bus bus, Route route, Schedule schedule, Assignment assignment) {
        driver.getAssignments().add(assignment);
        bus.getAssignments().add(assignment);
        route.getAssignments().add(assignment);
        schedule.getAssignments().add(assignment);
    }
}
