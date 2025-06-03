
# DesignPro - Designer Portfolio Platform

A modern web application for browsing and connecting with talented designers, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker and Docker Compose (for containerized deployment)
- Git

### Local Development (Without Docker)

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🐳 Docker Deployment

### Local Development with Docker

1. **Prerequisites**
   - Install Docker Desktop from [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)
   - Ensure Docker is running before proceeding

2. **One-command deployment**
   ```bash
   chmod +x scripts/deploy-local.sh
   ./scripts/deploy-local.sh
   ```
   
   Or manually:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build -d
   ```

3. **Access the application**
   - Frontend: `http://localhost:5173`
   - Database: `localhost:5433` (postgres-dev)
   - Redis: `localhost:6380`

4. **Stop the environment**
   ```bash
   docker-compose -f docker-compose.dev.yml down
   ```

### Production Deployment with Docker

1. **Start production environment**
   ```bash
   chmod +x scripts/deploy-prod.sh
   ./scripts/deploy-prod.sh
   ```
   
   Or manually:
   ```bash
   docker-compose up --build -d
   ```

2. **Access the application**
   - Frontend: `http://localhost:3000`
   - Database: `localhost:5432` (postgres)
   - Redis: `localhost:6379`

3. **Stop the environment**
   ```bash
   docker-compose down
   ```

## ☁️ Cloud Deployment

### Frontend Deployment (Netlify) - Automatic

1. **Connect to GitHub**
   - Push your code to a GitHub repository
   - Connect your GitHub account to Netlify at [https://netlify.com](https://netlify.com)

2. **Configure Netlify (Auto-detected)**
   - Build command: `npm run build` (configured in `netlify.toml`)
   - Publish directory: `dist` (configured in `netlify.toml`)
   - The deployment will work automatically with the provided `netlify.toml`

3. **Auto-deployment**
   - Any push to the main branch will automatically deploy
   - Preview deployments for pull requests
   - Environment-specific configurations included

### Alternative Cloud Deployment Options

#### Frontend Options
- **Vercel**: Import from GitHub, zero-config deployment
- **GitHub Pages**: Free static hosting with GitHub Actions
- **AWS S3 + CloudFront**: Enterprise-grade with CDN
- **Firebase Hosting**: Google's hosting with global CDN

#### Backend Deployment (Database & API)
- **Railway**: `railway login && railway new` - Deploy PostgreSQL + Redis
- **Heroku**: Heroku Postgres + Redis add-ons
- **AWS RDS + ElastiCache**: Managed database services
- **DigitalOcean Managed Databases**: Simple cloud databases
- **Docker on Cloud VMs**: Deploy containers to any cloud provider

#### Complete Stack Deployment
```bash
# Example: Deploy to a cloud VM (Ubuntu)
ssh user@your-server
git clone <your-repo>
cd <your-project>
sudo apt update && sudo apt install docker.io docker-compose
sudo ./scripts/deploy-prod.sh
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🐳 Docker Commands

### Development
```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up -d

# View logs
docker-compose -f docker-compose.dev.yml logs -f

# Restart specific service
docker-compose -f docker-compose.dev.yml restart frontend-dev

# Access database
docker exec -it <container-name> psql -U designpro -d designpro_dev
```

### Production
```bash
# Start production environment
docker-compose up -d

# Scale services
docker-compose up -d --scale frontend=3

# Update and restart
docker-compose pull && docker-compose up -d
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── DesignerCard.tsx # Designer profile cards
│   └── FilterBar.tsx   # Filter controls
├── pages/              # Page components
│   ├── Index.tsx       # Browse designers page
│   ├── Projects.tsx    # Projects showcase
│   └── Talent.tsx      # Top talent page
├── data/               # Static data
│   └── designers.ts    # Designer profiles data
├── hooks/              # Custom React hooks
└── lib/                # Utility functions

docker/
├── Dockerfile          # Production image
├── Dockerfile.dev      # Development image
├── docker-compose.yml  # Production services
├── docker-compose.dev.yml # Development services
├── nginx.conf          # Nginx configuration
└── init.sql           # Database initialization

scripts/
├── deploy-local.sh     # Local deployment script
└── deploy-prod.sh      # Production deployment script
```

## 🎨 Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: React Hooks
- **Build Tool**: Vite
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx (production)
- **Database**: PostgreSQL (ready for backend)
- **Caching**: Redis (ready for backend)
- **Deployment**: Netlify (frontend), Docker (full stack)

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
# Frontend Configuration
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=DesignPro
VITE_ENVIRONMENT=development

# Database Configuration (for backend integration)
DATABASE_URL=postgresql://designpro:password@localhost:5432/designpro
REDIS_URL=redis://localhost:6379

# Security
JWT_SECRET=your-jwt-secret-here
SESSION_SECRET=your-session-secret-here
```

### Docker Configuration Files
- `Dockerfile` - Multi-stage production build with Nginx
- `Dockerfile.dev` - Development build with hot reloading
- `docker-compose.yml` - Production services orchestration
- `docker-compose.dev.yml` - Development services with volume mounting
- `nginx.conf` - Production web server configuration with security headers
- `init.sql` - Database schema and sample data

## 🚀 Deployment Guide

### For Beginners (No Docker Knowledge Required)
1. **Install Docker Desktop** from [docker.com](https://docker.com)
2. **Clone this repository** and navigate to the folder
3. **Run the magic script**:
   ```bash
   chmod +x scripts/deploy-local.sh
   ./scripts/deploy-local.sh
   ```
4. **Open your browser** to `http://localhost:5173`

### For Production (Cloud Deployment)
1. **Frontend**: Connect GitHub to Netlify - automatic deployment
2. **Database**: Use managed services (Railway, AWS RDS, etc.)
3. **Full Stack**: Deploy Docker containers to cloud VMs

### CI/CD Pipeline (GitHub Actions)
The project is ready for CI/CD with:
- Automated testing on pull requests
- Automatic deployment to staging/production
- Docker image building and pushing
- Database migrations

## 🔍 Monitoring & Health Checks

### Built-in Health Checks
- Frontend: `http://localhost:3000/health`
- Database: Automatic PostgreSQL health monitoring
- Redis: Automatic Redis health monitoring

### Docker Health Status
```bash
# Check all services
docker-compose ps

# Check specific service logs
docker-compose logs frontend

# Check resource usage
docker stats
```

## 🛠️ Troubleshooting

### Common Docker Issues

1. **Docker not starting**
   ```bash
   # Check Docker status
   docker info
   
   # Restart Docker Desktop
   # Or on Linux: sudo systemctl restart docker
   ```

2. **Port conflicts**
   ```bash
   # Check what's using the port
   lsof -i :3000
   
   # Kill the process or change ports in docker-compose files
   ```

3. **Permission issues**
   ```bash
   # Fix permissions (Linux/Mac)
   sudo chmod +x scripts/*.sh
   
   # Or run with sudo
   sudo docker-compose up
   ```

4. **Build failures**
   ```bash
   # Clean rebuild
   docker-compose down -v
   docker system prune -a
   docker-compose up --build
   ```

### Database Connection Issues
```bash
# Access the database directly
docker exec -it designpro-postgres-1 psql -U designpro -d designpro

# Check database logs
docker-compose logs postgres
```

## 📈 Performance Optimization

### Production Optimizations Included
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

## 🔒 Security Features

- Non-root Docker containers
- Security headers in Nginx
- Environment variable isolation
- Database password protection
- HTTPS-ready configuration

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test with Docker: `./scripts/deploy-local.sh`
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Ready to deploy?** Just run `./scripts/deploy-local.sh` and you're up and running in minutes!

**Project URL**: https://lovable.dev/projects/f3617dca-23b5-419a-812f-179cba2525d9

For more detailed documentation, visit our [project documentation](https://docs.lovable.dev/).
