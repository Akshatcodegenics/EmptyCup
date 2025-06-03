
#!/bin/bash

echo "🚀 Starting local development deployment..."

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
docker-compose -f docker-compose.dev.yml down

# Build and start services
echo "📦 Building and starting development services..."
docker-compose -f docker-compose.dev.yml up --build -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 10

# Check service health
echo "🔍 Checking service health..."
docker-compose -f docker-compose.dev.yml ps

echo "✅ Local development deployment completed!"
echo ""
echo "🌐 Services available at:"
echo "   • Frontend: http://localhost:5173"
echo "   • Database: localhost:5433 (postgres-dev)"
echo "   • Redis: localhost:6380"
echo ""
echo "📋 Useful commands:"
echo "   • View logs: docker-compose -f docker-compose.dev.yml logs -f"
echo "   • Stop services: docker-compose -f docker-compose.dev.yml down"
echo "   • Restart services: docker-compose -f docker-compose.dev.yml restart"
