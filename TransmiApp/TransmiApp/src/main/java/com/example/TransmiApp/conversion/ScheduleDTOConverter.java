package com.example.TransmiApp.conversion;

import org.springframework.stereotype.Component;

import com.example.TransmiApp.dto.ScheduleDTO;
import com.example.TransmiApp.model.Schedule;

@Component
public class ScheduleDTOConverter {

    public ScheduleDTO entityToDTO(Schedule schedule) {
        return new ScheduleDTO(
            schedule.getIdSchedule(),
            schedule.getDays(),
            schedule.getTimeStart(),
            schedule.getTimeEnd()
        );
    }

    public Schedule DTOToEntity(ScheduleDTO scheduleDTO) {
        return new Schedule(
            scheduleDTO.getDays(),
            scheduleDTO.getTimeStart(),
            scheduleDTO.getTimeEnd()
        );
    }
}
