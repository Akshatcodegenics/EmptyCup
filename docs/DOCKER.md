
# Docker Setup & Deployment Guide

This guide covers Docker configuration and deployment for both development and production environments.

## Development with Docker

### Quick Start
```bash
chmod +x scripts/deploy-local.sh
./scripts/deploy-local.sh
```

### Manual Setup
```bash
docker-compose -f docker-compose.dev.yml up --build -d
```

### Services Available
- **Frontend**: `http://localhost:5173`
- **Database**: `localhost:5433` (postgres-dev)
- **Redis**: `localhost:6380`

### Useful Commands
```bash
# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Stop services
docker-compose -f docker-compose.dev.yml down

# Restart services
docker-compose -f docker-compose.dev.yml restart
```

## Production Deployment

### Quick Start
```bash
chmod +x scripts/deploy-prod.sh
./scripts/deploy-prod.sh
```

### Manual Setup
```bash
docker-compose up --build -d
```

### Services Available
- **Frontend**: `http://localhost:3000`
- **Database**: `localhost:5432` (postgres)
- **Redis**: `localhost:6379`

## Docker Configuration Files

### Dockerfile
Multi-stage production build with Nginx web server, including:
- Optimized build process
- Security headers
- Gzip compression
- Non-root user configuration

### Dockerfile.dev
Development build with:
- Hot reloading
- Volume mounting for live code updates
- Development-specific configurations

### docker-compose.yml (Production)
Production services orchestration:
- Frontend with Nginx
- PostgreSQL database
- Redis for caching
- Health checks
- Restart policies

### docker-compose.dev.yml (Development)
Development services with:
- Live code reloading
- Development database
- Volume mounting
- Development ports

### Health Checks
Built-in health monitoring for all services:
- Frontend: HTTP health endpoint
- Database: PostgreSQL connection check
- Redis: Ping command

## Environment Variables

Create a `.env` file for environment-specific configurations:
```env
# Frontend Configuration
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=DesignPro
VITE_ENVIRONMENT=development

# Database Configuration
DATABASE_URL=postgresql://designpro:password@localhost:5432/designpro
REDIS_URL=redis://localhost:6379

# Security
JWT_SECRET=your-jwt-secret-here
SESSION_SECRET=your-session-secret-here
```

## Performance Optimizations

### Production Features
- Multi-stage Docker builds for smaller images
- Nginx with gzip compression
- Static asset caching
- Security headers
- Health checks for zero-downtime deployments

### Scaling Options
```bash
# Scale frontend instances
docker-compose up -d --scale frontend=3

# Use a load balancer (nginx, traefik, etc.)
# Add read replicas for the database
# Implement Redis for session storage
```

## Security Features

- Non-root Docker containers
- Security headers in Nginx
- Environment variable isolation
- Database password protection
- HTTPS-ready configuration
