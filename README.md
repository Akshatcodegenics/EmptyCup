
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

1. **Start development environment**
   ```bash
   chmod +x scripts/deploy-local.sh
   ./scripts/deploy-local.sh
   ```
   
   Or manually:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

2. **Access the application**
   - Frontend: `http://localhost:5173`

3. **Stop the environment**
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

3. **Stop the environment**
   ```bash
   docker-compose down
   ```

## ☁️ Cloud Deployment

### Frontend Deployment (Netlify)

1. **Connect to GitHub**
   - Push your code to a GitHub repository
   - Connect your GitHub account to Netlify

2. **Configure Netlify**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - The `netlify.toml` file is already configured

3. **Auto-deployment**
   - Any push to the main branch will automatically deploy

### Alternative Frontend Deployment Options

- **Vercel**: Similar to Netlify, supports React out of the box
- **GitHub Pages**: Free hosting for static sites
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Firebase Hosting**: Google's hosting solution

### Backend Deployment (When Added)

- **Railway**: Simple deployment platform
- **Heroku**: Popular platform-as-a-service
- **AWS EC2**: Virtual machines in the cloud
- **DigitalOcean Droplets**: Simple cloud servers
- **Docker containers**: Deploy to any cloud provider

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

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
```

## 🎨 Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **State Management**: React Hooks
- **Build Tool**: Vite
- **Deployment**: Docker, Nginx

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=DesignPro
```

### Docker Configuration
- `Dockerfile` - Production build
- `Dockerfile.dev` - Development build
- `docker-compose.yml` - Production services
- `docker-compose.dev.yml` - Development services

## 🚀 Deployment Checklist

### Before Deployment
- [ ] Update environment variables
- [ ] Test Docker builds locally
- [ ] Run linting and tests
- [ ] Update version numbers
- [ ] Create deployment documentation

### For Production
- [ ] Configure domain and SSL
- [ ] Set up monitoring
- [ ] Configure backups
- [ ] Set up CI/CD pipeline
- [ ] Performance optimization

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Troubleshooting

### Common Issues

1. **Docker not starting**
   - Ensure Docker Desktop is running
   - Check Docker daemon status

2. **Port conflicts**
   - Change ports in docker-compose files
   - Kill processes using required ports

3. **Build failures**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility

### Getting Help

- Check the console for error messages
- Review Docker logs: `docker-compose logs`
- Ensure all dependencies are installed
- Verify environment configuration

---

**Project URL**: https://lovable.dev/projects/f3617dca-23b5-419a-812f-179cba2525d9

For more detailed documentation, visit our [project documentation](https://docs.lovable.dev/).
