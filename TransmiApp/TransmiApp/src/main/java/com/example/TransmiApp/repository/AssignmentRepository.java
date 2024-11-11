package com.example.TransmiApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Bus;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.model.Schedule;
    
@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {

    // Verificar bus asignado a conductor
    boolean existsByBusIdBusAndDriverNotNull(Long idBus);

    // Verificar ruta asignada a bus
    boolean existsByRouteIdRouteAndBusNotNull(Long idRoute);

    List<Assignment> findByBus(Bus bus);
    List<Assignment> findByDriver(Driver driver);
    List<Assignment> findByRoute(Route route);
    List<Assignment> findBySchedule(Schedule schedule);




}