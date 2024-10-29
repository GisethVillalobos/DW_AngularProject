package com.example.TransmiApp.model;

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
@Table(name="driver_table")
public class Driver {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idDriver")
    private Long idDriver;

    private String name;
    private String identification;
    private String phone;
    private String address;

    @JsonIgnore
    @OneToMany(mappedBy = "driver")
    private List<Assignment> assignments;

    public Driver(String name, String identification, String phone, String address, List<Assignment> assignments) {
        this.name = name;
        this.identification = identification;
        this.phone = phone;
        this.address = address;
        this.assignments = assignments;
    }

    public Driver(String name, String identification, String phone, String address) {
        this.name = name;
        this.identification = identification;
        this.phone = phone;
        this.address = address;
    }

    public Long getIdDriver() {
        return idDriver;
    }

    public void setIdDriver(Long idDriver) {
        this.idDriver = idDriver;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getIdentification() {
        return identification;
    }

    public void setIdentification(String identification) {
        this.identification = identification;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public List<Assignment> getAssignments() {
        return assignments;
    }

    public void setAssignments(List<Assignment> assignments) {
        this.assignments = assignments;
    }
    
}

