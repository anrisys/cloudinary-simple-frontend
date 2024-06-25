# React Setup Guide

## Prerequisites

Before you start, ensure you have the following:

1. **Node.js** and **npm** installed on your machine.
2. **MySQL** database server running.
3. **Cloudinary** account for image storage.
4. Make sure you have successfully run the backend application.[ (https://github.com/anrisys/cloudinary-simple-backend.git) ](https://github.com/anrisys/cloudinary-simple-backend.git)

## Steps to set Up the Project

### 1. Make sure to run the backend application

- Save the url link where the back end application running in your localhost

### 2. Create a ` .env` file

Create a `.env` file in the root directory of your project and add the following environment variables:

- VITE_API_URL=your_backend_url

## Before Running the Application

### 1. Install the necessary dependencies:

```bash
   npm install
```

## Running the application

To start the application in development mode, run:

```bash
   npm run dev
```

## Additional Notes

- Ensure your backend application is running
- If you encounter any issues, check the console logs for error messages and ensure all environment variables are correctly set.
