package com.example.TransmiApp.dto;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class AssignmentDTO {


    private Long idAssignment;
    private Long busId;
    private Long driverId;
    private Long routeId;
    private Long scheduleId;

    public Long getIdAssignment() {
        return idAssignment;
    }

    public void setIdAssignment(Long idAssignment) {
        this.idAssignment = idAssignment;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public Long getDriverId() {
        return driverId;
    }

    public void setDriverId(Long driverId) {
        this.driverId = driverId;
    }

    public Long getRouteId() {
        return routeId;
    }

    public void setRouteId(Long routeId) {
        this.routeId = routeId;
    }

    public Long getScheduleId() {
        return scheduleId;
    }

    public void setScheduleId(Long scheduleId) {
        this.scheduleId = scheduleId;
    }
}
