package com.example.TransmiApp.conversion;

import org.springframework.stereotype.Component;

import com.example.TransmiApp.dto.RouteDTO;
import com.example.TransmiApp.model.Route;

@Component
public class RouteDTOConverter {

    public RouteDTO entityToDTO(Route route) {
        return new RouteDTO(
            route.getIdRoute(),
            route.getCode(),
            route.getStations()
        );
    }

    public Route DTOToEntity(RouteDTO routeDTO) {
        return new Route(
            routeDTO.getCode(),
            routeDTO.getStations()
        );
    }
}
