
#!/bin/bash

echo "🚀 Starting local deployment..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Build and start services
echo "📦 Building and starting services..."
docker-compose -f docker-compose.dev.yml down
docker-compose -f docker-compose.dev.yml up --build -d

echo "✅ Local deployment completed!"
echo "🌐 Frontend available at: http://localhost:5173"
