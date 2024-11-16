package com.example.TransmiApp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.TransmiApp.model.Schedule;
    
@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {

        @Query("SELECT s.id FROM Schedule s")
    List<Long> findAllScheduleIdSchedules();
    
}
