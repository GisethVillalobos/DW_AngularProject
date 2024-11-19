
# **TransmiApp**

TransmiApp is an information system for TransMilenio. It includes basic CRUD operations, with a Spring Boot backend and an Angular frontend.

## **Table of Contents**
- [Features](#features)
- [Setup and Installation](#setup-and-installation)

## **Features**
- **Drivers**: CRUD for Drivers.
- **Buses**: CRUD for Buses.
- **Routes**: CRUD for Routes.
- **Role-Based Access Control**: Roles like `Admin`, `User`, and `Coordi` control access to certain operations.
- **Integrated Tests**: Integration tests for RouteController.
- **User Authentication**: JWT-based authentication.

## **Setup and Installation**

### **Backend Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/GisethVillalobos/TransmiApp.git
   cd TransmiApp
   ```
2. Navigate to the backend directory:
   ```bash
   cd TransmiApp
   ```
3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

### **Frontend Setup**
1. Navigate to the frontend directory:
   ```bash
   cd angular-app
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Serve the Angular application:
   ```bash
   ng serve
   ```

4. Visit `http://localhost:4200` in browser.


Thanks for reading!