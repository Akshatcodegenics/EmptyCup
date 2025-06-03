
# Troubleshooting Guide

This guide helps resolve common issues you might encounter while developing or deploying the DesignPro application.

## Development Issues

### Node.js and npm Issues

#### Issue: "Command not found: npm" or old Node version
```bash
# Check current versions
node --version
npm --version

# Update Node.js (use Node Version Manager)
# macOS/Linux:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Windows: Download from nodejs.org or use winget
winget install OpenJS.NodeJS
```

#### Issue: npm install fails with permission errors
```bash
# macOS/Linux: Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Or use npm's built-in fix
npm config set prefix ~/.npm-global
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile
```

### Development Server Issues

#### Issue: Port 5173 already in use
```bash
# Find what's using the port
lsof -i :5173

# Kill the process (replace PID with actual process ID)
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3000
```

#### Issue: Hot reload not working
```bash
# Check file watcher limits (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

# Restart the development server
npm run dev
```

#### Issue: Module not found errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## Docker Issues

### Docker Installation and Setup

#### Issue: Docker command not found
```bash
# Install Docker Desktop from https://docker.com

# Linux: Install Docker Engine
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl start docker
sudo usermod -aG docker $USER
# Log out and back in
```

#### Issue: Docker daemon not running
```bash
# macOS/Windows: Start Docker Desktop application

# Linux: Start Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Check Docker status
docker info
```

#### Issue: Permission denied when running Docker commands
```bash
# Add user to docker group (Linux)
sudo usermod -aG docker $USER
# Log out and back in

# Or run with sudo temporarily
sudo docker-compose up
```

### Docker Compose Issues

#### Issue: Port conflicts
```bash
# Check what's using the ports
lsof -i :5173
lsof -i :3000
lsof -i :5432

# Change ports in docker-compose files
# Edit docker-compose.dev.yml or docker-compose.yml
ports:
  - "5174:5173"  # Use different host port
```

#### Issue: Docker build fails
```bash
# Clean Docker system
docker system prune -a
docker volume prune

# Rebuild without cache
docker-compose build --no-cache
docker-compose up --build
```

#### Issue: Database connection fails
```bash
# Check database container status
docker-compose ps

# View database logs
docker-compose logs postgres-dev

# Connect to database directly
docker exec -it container-name psql -U designpro -d designpro_dev

# Reset database volume
docker-compose down -v
docker-compose up --build
```

### Container-Specific Issues

#### Issue: Frontend container exits immediately
```bash
# Check frontend logs
docker-compose logs frontend-dev

# Common fixes:
# 1. Check if package.json exists
# 2. Verify npm install completed
# 3. Check for syntax errors in code

# Debug by running container interactively
docker run -it --rm node:18-alpine sh
```

#### Issue: Database container won't start
```bash
# Check available disk space
df -h

# Check database logs
docker-compose logs postgres-dev

# Common issues:
# - Insufficient disk space
# - Port already in use
# - Invalid environment variables

# Reset database
docker-compose down
docker volume rm $(docker volume ls -q | grep postgres)
docker-compose up --build
```

## Build and Deployment Issues

### Build Failures

#### Issue: TypeScript compilation errors
```bash
# Check TypeScript errors
npx tsc --noEmit

# Common fixes:
# 1. Fix type errors in code
# 2. Update @types packages
# 3. Check tsconfig.json configuration

# Show detailed error information
npm run build 2>&1 | head -50
```

#### Issue: Vite build out of memory
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build

# Or in package.json scripts:
"build": "NODE_OPTIONS=--max-old-space-size=4096 vite build"
```

### Deployment Issues

#### Issue: Netlify deployment fails
```bash
# Check build logs in Netlify dashboard

# Common issues:
# 1. Wrong build command or publish directory
# 2. Environment variables not set
# 3. Node.js version mismatch

# Fix in netlify.toml:
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"
```

#### Issue: Production build doesn't match development
```bash
# Test production build locally
npm run build
npm run preview

# Check for environment-specific issues:
# 1. Missing environment variables
# 2. Different API URLs
# 3. Different asset paths
```

## Performance Issues

### Slow Development Server

#### Issue: Slow hot reload or compilation
```bash
# Exclude unnecessary files from Vite
# Add to vite.config.ts:
export default defineConfig({
  server: {
    fs: {
      allow: ['..']
    }
  },
  optimizeDeps: {
    exclude: ['some-large-dependency']
  }
})
```

#### Issue: High memory usage
```bash
# Monitor memory usage
docker stats

# Reduce Docker memory usage:
# 1. Close unused containers
# 2. Clean up images and volumes
# 3. Increase Docker memory limit in settings

# Clean up Docker
docker system prune -a
```

## Network and Connectivity Issues

### API Connection Issues

#### Issue: Cannot connect to API endpoints
```bash
# Check network connectivity
curl -I http://localhost:3001/api/health

# Check Docker network
docker network ls
docker inspect bridge

# Common fixes:
# 1. Verify API server is running
# 2. Check firewall settings
# 3. Verify CORS configuration
```

#### Issue: CORS errors in browser
```javascript
// Backend: Configure CORS properly
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}))

// Frontend: Check API URL in environment
console.log('API URL:', import.meta.env.VITE_API_URL)
```

## Database Issues

### PostgreSQL Problems

#### Issue: Database connection refused
```bash
# Check if PostgreSQL is running
docker-compose ps postgres-dev

# Check connection details
docker exec -it postgres-container psql -U designpro -d designpro_dev -c "\l"

# Common fixes:
# 1. Wait for database to fully start
# 2. Check credentials in environment variables
# 3. Verify network connectivity between containers
```

#### Issue: Database data not persisting
```bash
# Check if volumes are configured
docker volume ls

# Verify volume mounts in docker-compose.yml:
volumes:
  - postgres_dev_data:/var/lib/postgresql/data

# Recreate volume if needed
docker-compose down -v
docker-compose up --build
```

## Browser and Frontend Issues

### Browser Compatibility

#### Issue: App not loading in older browsers
```bash
# Check browser support in package.json:
"browserslist": [
  "> 1%",
  "last 2 versions",
  "not dead"
]

# Add polyfills if needed
npm install --save-dev @vitejs/plugin-legacy
```

#### Issue: Styling issues or layout problems
```bash
# Check Tailwind CSS compilation
npm run build

# Verify Tailwind config
npx tailwindcss --help

# Common fixes:
# 1. Clear browser cache
# 2. Check for CSS conflicts
# 3. Verify responsive design breakpoints
```

## Emergency Recovery

### Complete Reset

#### If everything breaks, nuclear option:
```bash
# Stop all containers
docker-compose down -v

# Clean Docker completely
docker system prune -a
docker volume prune

# Remove node_modules
rm -rf node_modules package-lock.json

# Fresh install
npm install

# Restart with Docker
./scripts/deploy-local.sh
```

#### Backup important data before reset:
```bash
# Export database
docker exec postgres-container pg_dump -U designpro designpro_dev > backup.sql

# Backup environment files
cp .env .env.backup
```

## Getting Help

### Log Collection
```bash
# Collect all relevant logs
docker-compose logs > docker-logs.txt
npm run build > build-logs.txt 2>&1

# System information
docker info > docker-info.txt
node --version > versions.txt
npm --version >> versions.txt
```

### Useful Commands for Debugging
```bash
# Check all running processes
ps aux | grep node
ps aux | grep docker

# Check disk space
df -h

# Check memory usage
free -h

# Check network connections
netstat -tlnp
```

### Community Resources
- [Lovable Discord](https://discord.com/channels/1119885301872070706/1280461670979993613)
- [Lovable Documentation](https://docs.lovable.dev/)
- [GitHub Issues](https://github.com/your-repo/issues)

Remember: Most issues have simple solutions. Start with the basics (restart, clean cache, check logs) before diving into complex debugging.
