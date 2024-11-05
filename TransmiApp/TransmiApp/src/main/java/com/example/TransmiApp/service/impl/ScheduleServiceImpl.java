package com.example.TransmiApp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.TransmiApp.conversion.ScheduleDTOConverter;
import com.example.TransmiApp.dto.ScheduleDTO;
import com.example.TransmiApp.model.Schedule;
import com.example.TransmiApp.repository.ScheduleRepository;
import com.example.TransmiApp.service.ScheduleService;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private ScheduleDTOConverter scheduleDTOConverter;

    @Override
    public List<Schedule> getAllSchedules() {
        return (List<Schedule>) scheduleRepository.findAll();
    }

    @Override
    public ScheduleDTO getScheduleById(Long idSchedule) {
        return scheduleDTOConverter.entityToDTO(scheduleRepository.findById(idSchedule).orElseThrow());
    }

    @Override
    public ScheduleDTO createSchedule(ScheduleDTO scheduleDTO) {
        Schedule schedule = scheduleDTOConverter.DTOToEntity(scheduleDTO);
        return scheduleDTOConverter.entityToDTO(scheduleRepository.save(schedule));
    }

    @Override
    public ScheduleDTO updateSchedule(Long idSchedule, ScheduleDTO scheduleDTO) {

        Schedule schedule = scheduleDTOConverter.DTOToEntity(scheduleDTO);

        Schedule existingSchedule = scheduleRepository.findById(idSchedule).orElseThrow();

        existingSchedule.setDays(schedule.getDays());
        existingSchedule.setTimeStart(schedule.getTimeStart());
        existingSchedule.setTimeEnd(schedule.getTimeEnd());
        existingSchedule.setAssignments(schedule.getAssignments());
        
        return scheduleDTOConverter.entityToDTO(scheduleRepository.save(existingSchedule));
    }

    @Override
    public void deleteSchedule(Long idSchedule) {
        if (scheduleRepository.existsById(idSchedule)) {
            scheduleRepository.deleteById(idSchedule);
        }
    }
}
