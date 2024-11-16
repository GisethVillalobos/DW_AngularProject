package com.example.TransmiApp.service.impl;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.TransmiApp.conversion.ScheduleDTOConverter;
import com.example.TransmiApp.dto.ScheduleDTO;
import com.example.TransmiApp.model.Assignment;
import com.example.TransmiApp.model.Schedule;
import com.example.TransmiApp.repository.AssignmentRepository;
import com.example.TransmiApp.repository.ScheduleRepository;
import com.example.TransmiApp.service.ScheduleService;

@Service
public class ScheduleServiceImpl implements ScheduleService {

    @Autowired
    private ScheduleRepository scheduleRepository;

    @Autowired
    private AssignmentRepository assignmentRepository;

    @Autowired
    private ScheduleDTOConverter scheduleDTOConverter;

    @Override
    public List<Schedule> getAllSchedules() {
        return (List<Schedule>) scheduleRepository.findAll();
    }

    @Override
    public List<Long> getScheduleIds() {
        return scheduleRepository.findAllScheduleIdSchedules();
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
    @Transactional
    public void deleteSchedule(Long idSchedule) {

        Schedule schedule = scheduleRepository.findById(idSchedule).orElseThrow(() -> new NoSuchElementException("Schedule not found"));

        // Setting schedule null for all assignments
        List<Assignment> assignments = assignmentRepository.findBySchedule(schedule);

        for (Assignment assignment : assignments) {
            if(assignment.getSchedule().getIdSchedule().equals(idSchedule)) {
                assignment.setSchedule(null);
                assignmentRepository.save(assignment);
            }
        } 
        scheduleRepository.deleteById(idSchedule);
    }

}
