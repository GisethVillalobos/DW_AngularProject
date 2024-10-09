package com.example.TransmiApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.TransmiApp.model.Assignment;
    
@Repository
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {
    
}