package com.example.TransmiApp.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AssignmentDTO {

    private Long idAssignment;
    private Long idBus;
    private Long idDriver;
    private Long idRoute;
    private Long idSchedule;
}