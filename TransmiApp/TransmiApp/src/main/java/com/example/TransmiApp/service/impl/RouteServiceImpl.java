package com.example.TransmiApp.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.TransmiApp.conversion.RouteDTOConverter;
import com.example.TransmiApp.dto.RouteDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Route;
import com.example.TransmiApp.repository.AssignmentRepository;
import com.example.TransmiApp.repository.RouteRepository;
import com.example.TransmiApp.service.RouteService;

@Service
public class RouteServiceImpl implements RouteService {

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private RouteDTOConverter routeDTOConverter;

    @Override
    public List<Route> getAllRoutes() {
        return (List<Route>) routeRepository.findAll();
    }

    @Override
    public List<Long> getRouteIds() {
        return routeRepository.findAllRouteIdRoutes();
    }

    @Override
    public RouteDTO getRouteById(Long idRoute) {
        Route route = routeRepository.findById(idRoute).orElseThrow();
        return routeDTOConverter.entityToDTO(route);
    }

    @Override
    public RouteDTO createRoute(RouteDTO routeDTO) {
        Route route = routeDTOConverter.DTOToEntity(routeDTO);
        return routeDTOConverter.entityToDTO(routeRepository.save(route));
    }

    @Override
    public RouteDTO updateRoute(Long idRoute, RouteDTO routeDTO) {
        Route route = routeDTOConverter.DTOToEntity(routeDTO);
        Route existingRoute = routeRepository.findById(idRoute).orElseThrow();

        existingRoute.setCode(route.getCode());
        existingRoute.setStations(route.getStations());
        existingRoute.setAssignments(route.getAssignments());
        
        return routeDTOConverter.entityToDTO(routeRepository.save(existingRoute));
    }

    @Override
    @Transactional
        public void deleteRoute(Long idRoute) {

        boolean hasBusAssigned = assignmentRepository.existsByRouteIdRouteAndBusNotNull(idRoute);
        if (hasBusAssigned) {
            throw new IllegalArgumentException("No es posible eliminar esta ruta. Tiene un bus asignado.");
        } else{

            Route route = routeRepository.findById(idRoute).orElseThrow(() -> new NoSuchElementException("Route not found"));

            // Setting route null for all assignments
            List<Assignment> assignments = assignmentRepository.findByRoute(route);

            for (Assignment assignment : assignments) {
                if(assignment.getRoute().getIdRoute().equals(idRoute)) {
                    assignment.setRoute(null);
                    assignmentRepository.save(assignment);
                }
            } 
            routeRepository.deleteById(idRoute);
        } 
        
    }
}
