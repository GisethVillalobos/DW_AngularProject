package com.example.TransmiApp.model;

import java.time.LocalTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="schedule_table")
public class Schedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idSchedule")
    private Long idSchedule;

    private List<String> days;
    private LocalTime timeStart;
    private LocalTime timeEnd;

    @JsonIgnore
    @OneToMany(mappedBy = "schedule")
    private List<Assignment> assignments;

    public Schedule(List<String> days, LocalTime timeStart, LocalTime timeEnd, List<Assignment> assignments) {
        this.days = days;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
        this.assignments = assignments;
    }

    public Schedule(List<String> days, LocalTime timeStart, LocalTime timeEnd) {
        this.days = days;
        this.timeStart = timeStart;
        this.timeEnd = timeEnd;
    }

    public Long getIdSchedule() {
        return idSchedule;
    }

    public void setIdSchedule(Long idSchedule) {
        this.idSchedule = idSchedule;
    }

    public List<String> getDays() {
        return days;
    }

    public void setDays(List<String> days) {
        this.days = days;
    }

    public LocalTime getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(LocalTime timeStart) {
        this.timeStart = timeStart;
    }

    public LocalTime getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(LocalTime timeEnd) {
        this.timeEnd = timeEnd;
    }

    public List<Assignment> getAssignments() {
        return assignments;
    }

    public void setAssignments(List<Assignment> assignments) {
        this.assignments = assignments;
    }


}
