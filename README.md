
# Docker React-Express App

This project contains a React frontend and an Express backend, both dockerized for easy development and deployment.

## Prerequisites

- Docker and Docker Compose must be installed on your system.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/shresthashim/docker-react-express.git
cd docker-react-express
```

### 2. Build Docker Images

- Navigate to the root of the project.
  
#### For Server:
```bash
cd server
docker build -t server-image .
```

#### For Client:
```bash
cd ../client
docker build -t client-image .
```

### 3. Run Docker Containers

#### For Server:
```bash
docker run -p 5000:5000 server-image
```

#### For Client:
```bash
docker run -p 3000:3000 client-image
```

### 4. Docker Compose (Optional)

To run both services together using Docker Compose:

- In the project root, run:

```bash
docker-compose up
```

This will start both the client and server containers.

### 5. Access the Application

- Frontend: Open your browser and go to [http://localhost:3000](http://localhost:3000)
- Backend API: Access the API at [http://localhost:5000](http://localhost:5000)

## Stopping Containers

To stop containers running in detached mode:
```bash
docker-compose down
```

## Additional Notes

- Ensure your `.env` files (if any) are correctly configured for both client and server.
