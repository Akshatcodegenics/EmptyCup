
# Development Guide

This guide covers the development workflow, best practices, and tools used in the DesignPro project.

## Getting Started

### Development Environment Setup

1. **Prerequisites**
   ```bash
   # Check Node.js version (18+ required)
   node --version
   
   # Check npm version
   npm --version
   
   # Install dependencies
   npm install
   ```

2. **Development Server**
   ```bash
   # Start development server
   npm run dev
   
   # Open in browser
   open http://localhost:5173
   ```

3. **With Docker (Recommended)**
   ```bash
   # One-command setup
   ./scripts/deploy-local.sh
   
   # Access services
   # Frontend: http://localhost:5173
   # Database: localhost:5433
   # Redis: localhost:6380
   ```

## Development Workflow

### Feature Development

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes**
   - Follow component-first approach
   - Write TypeScript for type safety
   - Use Tailwind CSS for styling

3. **Test Locally**
   ```bash
   # Test with Docker
   ./scripts/deploy-local.sh
   
   # Test production build
   npm run build && npm run preview
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

### Code Style Guidelines

#### Component Structure
```typescript
// Component file structure
import React from 'react'
import { SomeType } from './types'

interface ComponentProps {
  title: string
  onClick?: () => void
}

export default function Component({ title, onClick }: ComponentProps) {
  // Component logic
  
  return (
    <div className="component-wrapper">
      {/* JSX content */}
    </div>
  )
}
```

#### File Organization
```
src/components/NewFeature/
├── index.ts              # Barrel export
├── NewFeature.tsx        # Main component
├── NewFeatureCard.tsx    # Sub-component
├── hooks/
│   └── useNewFeature.ts  # Custom hooks
├── types.ts              # Type definitions
└── __tests__/
    └── NewFeature.test.tsx
```

### Styling Guidelines

#### Tailwind CSS Best Practices
```typescript
// ✅ Good: Utility classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">

// ✅ Good: Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// ❌ Avoid: Inline styles
<div style={{ padding: '16px', backgroundColor: 'white' }}>
```

#### Component Composition
```typescript
// ✅ Good: Composable components
<Card className="designer-card">
  <CardHeader>
    <CardTitle>{designer.name}</CardTitle>
  </CardHeader>
  <CardContent>
    <DesignerDetails designer={designer} />
  </CardContent>
</Card>
```

### State Management

#### Local State
```typescript
// Simple component state
const [isOpen, setIsOpen] = useState(false)
const [formData, setFormData] = useState({ name: '', email: '' })
```

#### Custom Hooks
```typescript
// Reusable logic in custom hooks
function useDesignerFilters() {
  const [filters, setFilters] = useState({})
  
  const filteredDesigners = useMemo(() => {
    return designers.filter(designer => 
      // Filter logic
    )
  }, [designers, filters])
  
  return { filters, setFilters, filteredDesigners }
}
```

### API Integration (Future)

#### API Service Pattern
```typescript
// services/designerService.ts
export const designerService = {
  async getAll(): Promise<Designer[]> {
    const response = await fetch('/api/designers')
    return response.json()
  },
  
  async getById(id: string): Promise<Designer> {
    const response = await fetch(`/api/designers/${id}`)
    return response.json()
  }
}
```

#### React Query Integration
```typescript
// hooks/useDesigners.ts
import { useQuery } from '@tanstack/react-query'

export function useDesigners() {
  return useQuery({
    queryKey: ['designers'],
    queryFn: designerService.getAll,
  })
}
```

## Development Tools

### Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
npm run lint            # Run ESLint

# Docker
./scripts/deploy-local.sh   # Local development
./scripts/deploy-prod.sh    # Production build
```

### VS Code Setup

#### Recommended Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint"
  ]
}
```

#### Settings
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.preferences.quoteStyle": "single",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

### Debugging

#### Browser DevTools
- React Developer Tools for component inspection
- Redux DevTools for state management (when added)
- Network tab for API debugging

#### VS Code Debugging
```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch Chrome",
      "request": "launch",
      "type": "chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

#### Docker Debugging
```bash
# View container logs
docker-compose -f docker-compose.dev.yml logs -f frontend-dev

# Execute commands in container
docker exec -it container-name sh

# Check container health
docker-compose -f docker-compose.dev.yml ps
```

## Testing (Ready to Implement)

### Unit Testing Setup
```bash
# Install testing dependencies (when needed)
npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

### Test Examples
```typescript
// __tests__/DesignerCard.test.tsx
import { render, screen } from '@testing-library/react'
import DesignerCard from '../DesignerCard'

test('renders designer name', () => {
  const designer = { name: 'John Doe', /* ... */ }
  render(<DesignerCard designer={designer} />)
  expect(screen.getByText('John Doe')).toBeInTheDocument()
})
```

## Performance Optimization

### Bundle Analysis
```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist/
```

### Code Splitting
```typescript
// Lazy load components
const LazyComponent = lazy(() => import('./LazyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
```

### Image Optimization
```typescript
// Use optimized images
<img 
  src="/images/designer.webp" 
  alt="Designer" 
  loading="lazy"
  className="w-full h-auto"
/>
```

## Environment Variables

### Development (.env.local)
```env
VITE_API_URL=http://localhost:3001
VITE_ENVIRONMENT=development
VITE_DEBUG=true
```

### Production
```env
VITE_API_URL=https://api.yourdomain.com
VITE_ENVIRONMENT=production
VITE_DEBUG=false
```

## Common Development Tasks

### Adding New Components
1. Create component file in appropriate directory
2. Define TypeScript interfaces
3. Implement component with proper styling
4. Export from index file
5. Add to Storybook (if using)

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route to router configuration
3. Update navigation if needed
4. Add proper meta tags and SEO

### Database Changes (Future)
1. Update `init.sql` with schema changes
2. Create migration scripts
3. Update TypeScript interfaces
4. Test with Docker containers

## Troubleshooting Development Issues

### Common Problems
- **Port conflicts**: Change ports in docker-compose files
- **Build errors**: Check TypeScript errors first
- **Docker issues**: Restart Docker service
- **Hot reload not working**: Check file watcher limits

### Debugging Steps
1. Check console for errors
2. Verify environment variables
3. Test with fresh Docker containers
4. Check network connectivity
5. Validate TypeScript compilation
