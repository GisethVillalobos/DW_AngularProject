package com.example.TransmiApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.TransmiApp.model.Driver;
    
@Repository
public interface DriverRepository extends JpaRepository<Driver, Long> {

    @Query("SELECT d.id FROM Driver d")
    List<Long> findAllDriverIdDrivers();
    
}
