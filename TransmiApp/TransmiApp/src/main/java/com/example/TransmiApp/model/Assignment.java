package com.example.TransmiApp.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="assignment_table")
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idAssignment;

    @ManyToOne
    @JoinColumn(
        name = "bus_idBus",
        referencedColumnName = "idBus",
        nullable = true
        )
    @JsonIgnore
    private Bus bus;

    @ManyToOne
    @JoinColumn(
        name = "driver_idDriver",
        referencedColumnName = "idDriver",
        nullable = true
        )
    @JsonIgnore
    private Driver driver;


    @ManyToOne
    @JoinColumn(
        name = "route_idRoute",
        referencedColumnName = "idRoute",
        nullable = true
        )
    @JsonIgnore
    private Route route;

    @ManyToOne
    @JoinColumn(
        name = "schedule_idSchedule",
        referencedColumnName = "idSchedule",
        nullable = true
        )
    @JsonIgnore
    private Schedule schedule;

    public Assignment(Driver driver, Bus bus, Route route, Schedule schedule) {
        this.driver = driver;
        this.bus = bus;
        this.route = route;
        this.schedule = schedule;
    }

}
