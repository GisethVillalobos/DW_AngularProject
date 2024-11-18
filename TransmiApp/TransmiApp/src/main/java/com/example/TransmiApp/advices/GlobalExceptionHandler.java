package com.example.TransmiApp.advices;

import java.util.NoSuchElementException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.example.TransmiApp.dto.ErrorDTO;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private final Logger log = LoggerFactory.getLogger(getClass());

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorDTO> handleIllegalArgumentException(IllegalArgumentException ex) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ErrorDTO(ex.getMessage()));
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ErrorDTO> elementNotFound(NoSuchElementException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(new ErrorDTO("Resource does not exist"));
    }

    @ExceptionHandler(value = { Exception.class })
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public String internalServerError(Exception e) {
        log.error("Exception:", e);
        return "Internal error";
    }

    // Authentication exceptions

    @ExceptionHandler(value = { AuthenticationException.class })
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public String deniedPermissionException(AuthenticationException e) {
        log.error("Unauthorized:", e);
        return "Invalid credentials";
    }

    @ExceptionHandler(value = { AccessDeniedException.class })
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public String internalServerError(AccessDeniedException e) {
        log.error("Forbidden:", e);
        return "User has no access to resource";
    }
}
