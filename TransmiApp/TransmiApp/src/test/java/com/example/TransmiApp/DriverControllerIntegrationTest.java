package com.example.TransmiApp;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.annotation.DirtiesContext.ClassMode;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.reactive.server.WebTestClient;

import com.example.TransmiApp.dto.DriverDTO;
import com.example.TransmiApp.model.Driver;
import com.example.TransmiApp.repository.DriverRepository;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@ActiveProfiles("integration-testing")
@DirtiesContext(classMode = ClassMode.BEFORE_EACH_TEST_METHOD)
public class DriverControllerIntegrationTest {

    private String SERVER_URL;

    @Autowired
    DriverRepository driverRepository;

    @Autowired
    private WebTestClient webTestClient;

    @Value("${local.server.port}")
    private int port;

    @BeforeEach
    void init() {
        SERVER_URL = "http://localhost:" + port;
        System.out.println("Using server URL: " + SERVER_URL);
        driverRepository.save(new Driver("Alicia", "10101010", "555-4343", "Calle a #b-00"));
        driverRepository.save(new Driver("Bob", "20202020", "666-4343", "Calle b #c-00"));
        driverRepository.save(new Driver("Carlos", "30303030", "777-4343", "Calle c #d-00"));
    }


    @Test
    void nuevoConductor() {

        DriverDTO driverDTO = new DriverDTO();

        driverDTO.setName("John Doe");
        driverDTO.setIdentification("123456");
        driverDTO.setPhone("123-456-7890");
        driverDTO.setAddress("123 Main St");

        webTestClient
                // Construir la petición
                .post()
                .uri(SERVER_URL + "/api/driver/create")
                .header("Authorization", "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQ09PUkRJIiwic3ViIjoidGVzdHVzZXJAY29vcmRpLnRyYW5zbWkuY29tIiwiaWF0IjoxNzMxOTgzNTI4LCJleHAiOjE3MzIwMTk1Mjh9.tyGk06ENq82agPSK1mhDRR_AA7-G9vQuKTQaPu54_7xHK5YIihsIycYPrGBMupLu")
                .bodyValue(driverDTO)

                // Ejecutar la petición
                .exchange()

                // Verificar el resultado
                .expectStatus().isCreated()

                .expectBody(DriverDTO.class)
                .value(driver -> {
                    assertNotNull(driver);
                    assertEquals("John Doe", driver.getName());
                    assertEquals("123456", driver.getIdentification());
                    assertEquals("123-456-7890", driver.getPhone());
                    assertEquals("123 Main St", driver.getAddress());
            });
    }

    @Test
    void todosConductores() {
        webTestClient
                // Construir la petición
                .get()
                .uri(SERVER_URL + "/api/driver/all")
                .header("Authorization", "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQ09PUkRJIiwic3ViIjoidGVzdHVzZXJAY29vcmRpLnRyYW5zbWkuY29tIiwiaWF0IjoxNzMxOTgzNTI4LCJleHAiOjE3MzIwMTk1Mjh9.tyGk06ENq82agPSK1mhDRR_AA7-G9vQuKTQaPu54_7xHK5YIihsIycYPrGBMupLu")
                
                // Ejecutar la petición
                .exchange()

                // Verificar el resultado
                .expectStatus().isOk()
                .expectBodyList(Driver.class)
                .value(drivers -> {
                    assertNotNull(drivers);
                    assertTrue(!drivers.isEmpty());
                });
    }

    @Test
    void todosIdConductores() {

        List<Long> expectedIds = List.of(1L, 2L, 3L);

        webTestClient
            // Construir la petición
            .get()
            .uri("/api/driver/ids")
            .header("Authorization", "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQ09PUkRJIiwic3ViIjoidGVzdHVzZXJAY29vcmRpLnRyYW5zbWkuY29tIiwiaWF0IjoxNzMxOTgzNTI4LCJleHAiOjE3MzIwMTk1Mjh9.tyGk06ENq82agPSK1mhDRR_AA7-G9vQuKTQaPu54_7xHK5YIihsIycYPrGBMupLu")
            
            // Ejecutar la petición
            .exchange()

            // Verificar el resultado
            .expectStatus().isOk()
            .expectBodyList(Long.class)
            .value(ids -> {
                assertThat(ids).isNotNull();
                assertThat(ids).containsExactlyElementsOf(expectedIds);
            });
    }

    @Test
    void encontrarPorId() {
        Long idDriver = (long) 1;

        webTestClient
                // Construir la petición
                .get()
                .uri(SERVER_URL + "/api/driver/read/" + idDriver)
                .header("Authorization", "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQ09PUkRJIiwic3ViIjoidGVzdHVzZXJAY29vcmRpLnRyYW5zbWkuY29tIiwiaWF0IjoxNzMxOTgzNTI4LCJleHAiOjE3MzIwMTk1Mjh9.tyGk06ENq82agPSK1mhDRR_AA7-G9vQuKTQaPu54_7xHK5YIihsIycYPrGBMupLu")
                
                // Ejecutar la petición
                .exchange()

                // Verificar el resultado
                .expectStatus().isOk()
                .expectBody(DriverDTO.class)
                .value(driver -> {
                    assertNotNull(driver);
                    assertEquals(idDriver, driver.getIdDriver());
                });
    }

    @Test
    void actualizarConductor() {
        Long idDriver = (long) 1;

        DriverDTO driverDTO = new DriverDTO();
        driverDTO.setName("Jane Doe");
        driverDTO.setIdentification("654321");
        driverDTO.setPhone("987-654-3210");
        driverDTO.setAddress("456 Another St");

        webTestClient
                // Construir la petición
                .put()
                .uri(SERVER_URL + "/api/driver/update/" + idDriver)
                .header("Authorization", "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQ09PUkRJIiwic3ViIjoidGVzdHVzZXJAY29vcmRpLnRyYW5zbWkuY29tIiwiaWF0IjoxNzMxOTgzNTI4LCJleHAiOjE3MzIwMTk1Mjh9.tyGk06ENq82agPSK1mhDRR_AA7-G9vQuKTQaPu54_7xHK5YIihsIycYPrGBMupLu")
                .bodyValue(driverDTO)

                // Ejecutar la petición
                .exchange()

                // Verificar el resultado
                .expectStatus().isOk()
                .expectBody(DriverDTO.class)
                .value(updatedDriver -> {
                    assertNotNull(updatedDriver);
                    assertEquals("Jane Doe", updatedDriver.getName());
                    assertEquals("654321", updatedDriver.getIdentification());
                    assertEquals("987-654-3210", updatedDriver.getPhone());
                    assertEquals("456 Another St", updatedDriver.getAddress());
                });
    }

    @Test
    void deleteDriver() {
        Long idDriver = (long) 2;

        webTestClient
                // Construir la petición
                .delete()
                .uri(SERVER_URL + "/api/driver/delete/" + idDriver)
                .header("Authorization", "Bearer eyJhbGciOiJIUzM4NCJ9.eyJyb2xlIjoiQ09PUkRJIiwic3ViIjoidGVzdHVzZXJAY29vcmRpLnRyYW5zbWkuY29tIiwiaWF0IjoxNzMxOTgzNTI4LCJleHAiOjE3MzIwMTk1Mjh9.tyGk06ENq82agPSK1mhDRR_AA7-G9vQuKTQaPu54_7xHK5YIihsIycYPrGBMupLu")
                
                // Ejecutar la petición
                .exchange()

                // Verificar el resultado
                .expectStatus().isNoContent();
    }


}