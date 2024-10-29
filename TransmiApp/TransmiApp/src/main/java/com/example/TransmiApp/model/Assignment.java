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
import lombok.NoArgsConstructor;

@Entity
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
        referencedColumnName = "idBus"
        )
    @JsonIgnore
    private Bus bus;

    @ManyToOne
    @JoinColumn(
        name = "driver_idDriver",
        referencedColumnName = "idDriver"
        )
    @JsonIgnore
    private Driver driver;


    @ManyToOne
    @JoinColumn(
        name = "route_idRoute",
        referencedColumnName = "idRoute"
        )
    @JsonIgnore
    private Route route;

    @ManyToOne
    @JoinColumn(
        name = "schedule_idSchedule",
        referencedColumnName = "idSchedule"
        )
    @JsonIgnore
    private Schedule schedule;


    public Long getIdAssignment() {
        return idAssignment;
    }

    public void setIdAssignment(Long idAssignment) {
        this.idAssignment = idAssignment;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public Bus getBus() {
        return bus;
    }

    public void setBus(Bus bus) {
        this.bus = bus;
    }

    public Route getRoute() {
        return route;
    }

    public void setRoute(Route route) {
        this.route = route;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }

    public Assignment(Driver driver, Bus bus, Route route, Schedule schedule) {
        this.driver = driver;
        this.bus = bus;
        this.route = route;
        this.schedule = schedule;
    }

}
