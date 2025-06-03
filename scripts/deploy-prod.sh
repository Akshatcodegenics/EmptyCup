
#!/bin/bash

echo "🚀 Starting production deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    echo "📖 Docker installation guide: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if docker-compose is available
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install it first."
    echo "📖 Docker Compose installation guide: https://docs.docker.com/compose/install/"
    exit 1
fi

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker-compose down

# Build and start services
echo "📦 Building and starting production services..."
docker-compose up --build -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 15

# Check service health
echo "🔍 Checking service health..."
docker-compose ps

echo "✅ Production deployment completed!"
echo ""
echo "🌐 Services available at:"
echo "   • Frontend: http://localhost:3000"
echo "   • Database: localhost:5432 (postgres)"
echo "   • Redis: localhost:6379"
echo ""
echo "📋 Useful commands:"
echo "   • View logs: docker-compose logs -f"
echo "   • Stop services: docker-compose down"
echo "   • Restart services: docker-compose restart"
echo ""
echo "🔧 For production deployment:"
echo "   • Configure your domain in nginx.conf"
echo "   • Set up SSL certificates"
echo "   • Configure environment variables"
