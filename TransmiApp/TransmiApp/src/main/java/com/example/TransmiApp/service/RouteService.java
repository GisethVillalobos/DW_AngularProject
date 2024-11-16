package com.example.TransmiApp.service;

import java.util.List;

import com.example.TransmiApp.dto.RouteDTO;
import com.example.TransmiApp.model.Route;

public interface RouteService {
    List<Route> getAllRoutes();
    List<Long> getRouteIds();
    RouteDTO getRouteById(Long idRoute);
    RouteDTO createRoute(RouteDTO routeDTO);
    RouteDTO updateRoute(Long idRoute, RouteDTO routeDTO);
    void deleteRoute(Long idRoute);
}
