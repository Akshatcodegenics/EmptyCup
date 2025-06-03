
#!/bin/sh

# Health check script for Docker containers
# This script can be used to verify if the application is running correctly

# Check if the application is responding
if curl -f http://localhost:5173/health > /dev/null 2>&1; then
    echo "✅ Application is healthy"
    exit 0
else
    echo "❌ Application health check failed"
    exit 1
fi
