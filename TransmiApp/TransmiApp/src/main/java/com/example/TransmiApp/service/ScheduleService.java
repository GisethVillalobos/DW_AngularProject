package com.example.TransmiApp.service;

import java.util.List;

import com.example.TransmiApp.dto.ScheduleDTO;
import com.example.TransmiApp.model.Schedule;

public interface ScheduleService {
    List<Schedule> getAllSchedules();
    ScheduleDTO getScheduleById(Long idSchedule);
    ScheduleDTO createSchedule(ScheduleDTO scheduleDTO);
    ScheduleDTO updateSchedule(Long idSchedule, ScheduleDTO scheduleDTO);
    void deleteSchedule(Long idSchedule);
}
