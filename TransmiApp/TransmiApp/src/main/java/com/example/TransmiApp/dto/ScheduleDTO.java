package com.example.TransmiApp.dto;

import java.time.LocalTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ScheduleDTO {

    private Long idSchedule;
    private List<String> days;
    private LocalTime timeStart;
    private LocalTime timeEnd;

}
