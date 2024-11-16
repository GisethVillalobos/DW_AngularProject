package com.example.TransmiApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.TransmiApp.model.Route;
    
@Repository
public interface RouteRepository extends JpaRepository<Route, Long> {

        @Query("SELECT r.id FROM Route r")
    List<Long> findAllRouteIdRoutes();
    
}