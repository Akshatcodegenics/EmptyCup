
# EmptyCup - Designer Portfolio Platform

A modern web application for browsing and connecting with talented designers, built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 
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

## 🐳 Docker Quick Start

### For Beginners (No Docker Knowledge Required)
1. **Install Docker Desktop** from [docker.com](https://docker.com)
2. **Clone this repository** and navigate to the folder
3. **Run the magic script**:
   ```bash
   chmod +x scripts/deploy-local.sh
   ./scripts/deploy-local.sh
   ```
4. **Open your browser** to `http://localhost:5173`

## 📚 Documentation

- [Docker Setup & Deployment](docs/DOCKER.md) - Complete Docker configuration and deployment guide
- [Cloud Deployment](docs/DEPLOYMENT.md) - Production deployment options and CI/CD
- [Project Structure](docs/STRUCTURE.md) - Codebase organization and architecture
- [Development Guide](docs/DEVELOPMENT.md) - Development workflow and best practices
- [Troubleshooting](docs/TROUBLESHOOTING.md) - Common issues and solutions

## 🎨 Technologies Used

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router
- **Build Tool**: Vite
- **Containerization**: Docker, Docker Compose

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Test with Docker: `./scripts/deploy-local.sh`
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

---

**Ready to deploy?** Just run `./scripts/deploy-local.sh` and you're up and running in minutes!

