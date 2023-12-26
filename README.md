# Skyfri UI - Tenant CRUD Application

This is a CRUD (Create, Read, Update, Delete) UI application built using React.js for managing tenant data. The app utilizes Axios for making API requests and Bootstrap for styling.

## Installation

To get started, follow these steps:

1. Clone this repository:

    ```bash
    git clone <repository-url>
    cd skyfri-ui
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Install Axios and Bootstrap:

    ```bash
    npm install axios
    ```

    ```bash
    npm i --save bootstrap
    ```

## Configuration

The app requires updating the API URL in `/src/components/TenantCrud.jsx` file to connect to the backend API for CRUD operations. Locate the methods for Create, Read, Update, and Delete in this file and update the API URL accordingly.

## Usage

Run the application:

```bash
npm start
```

This will start the development server and launch the application in your default web browser.

## Application Structure
### Tenant CRUD Interface

The UI consists of two main parts:

1. Registration and Update Form:

 - Use the top part of the application to enter new tenant information.
 - This section serves for both tenant registration and updating existing tenant data.

2. Tenant Table:

 - The lower part of the application displays a table containing the list of registered tenants.
 - It provides a view of all the previously registered tenants.
