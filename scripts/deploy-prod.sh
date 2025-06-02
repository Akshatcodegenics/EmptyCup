
#!/bin/bash

echo "🚀 Starting production deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Build and start services
echo "📦 Building and starting production services..."
docker-compose down
docker-compose up --build -d

echo "✅ Production deployment completed!"
echo "🌐 Frontend available at: http://localhost:3000"
