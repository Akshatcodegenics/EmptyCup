
# Project Structure Guide

This document outlines the codebase organization and architecture decisions.

## Directory Structure

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
├── lib/                # Utility functions
└── utils/              # Helper utilities

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

docs/
├── DOCKER.md          # Docker setup guide
├── DEPLOYMENT.md      # Cloud deployment guide
├── STRUCTURE.md       # This file
├── DEVELOPMENT.md     # Development workflow
└── TROUBLESHOOTING.md # Common issues
```

## Component Architecture

### UI Components (`src/components/ui/`)
- **Purpose**: Reusable, unstyled components from shadcn/ui
- **Style**: Consistent design system components
- **Usage**: Building blocks for larger components

### Feature Components (`src/components/`)
- **Header.tsx**: Main navigation with user actions
- **DesignerCard.tsx**: Designer profile display component
- **FilterBar.tsx**: Search and filter functionality

### Page Components (`src/pages/`)
- **Index.tsx**: Main browse page with designer listings
- **Projects.tsx**: Project showcase gallery
- **Talent.tsx**: Featured top talent page
- **NotFound.tsx**: 404 error page

## Data Flow

### Static Data (`src/data/`)
- **designers.ts**: Mock designer profiles
- **Structure**: Typed interfaces for type safety
- **Future**: Ready to connect to API endpoints

### State Management
- **Current**: React useState for local component state
- **Future Ready**: Prepared for Redux Toolkit or Zustand
- **API State**: React Query integration ready

## Styling Architecture

### Tailwind CSS
- **Utility-first**: Consistent spacing and colors
- **Responsive**: Mobile-first responsive design
- **Dark Mode**: Theme switching capability

### Component Styling
- **shadcn/ui**: Pre-built accessible components
- **Custom Components**: Tailwind utility classes
- **Animations**: Tailwind CSS animations

## File Naming Conventions

### Components
- **PascalCase**: `DesignerCard.tsx`
- **Descriptive**: Clear component purpose
- **Co-location**: Related files in same directory

### Utilities
- **camelCase**: `formatDate.ts`
- **Descriptive**: Clear function purpose
- **Pure Functions**: No side effects

### Pages
- **PascalCase**: `Index.tsx`
- **Route Names**: Match URL structure
- **Default Exports**: For route components

## TypeScript Integration

### Type Definitions
- **Interfaces**: Clear data structures
- **Strict Mode**: Enhanced type checking
- **Props**: Typed component interfaces

### Import/Export Patterns
```typescript
// Named exports for utilities
export const formatDate = (date: Date) => { ... }

// Default exports for components
export default function DesignerCard() { ... }

// Type-only imports
import type { Designer } from './types'
```

## Performance Considerations

### Code Splitting
- **Route-based**: Automatic with React Router
- **Component-based**: Dynamic imports for large components
- **Bundle Analysis**: Vite bundle analyzer

### Asset Optimization
- **Images**: Optimized placeholder strategy
- **Icons**: Lucide React for consistent iconography
- **Fonts**: System fonts with fallbacks

## Scalability Patterns

### Component Composition
```typescript
// Composable components
<Card>
  <CardHeader>
    <CardTitle>Designer Name</CardTitle>
  </CardHeader>
  <CardContent>
    <DesignerDetails />
  </CardContent>
</Card>
```

### Hook Patterns
```typescript
// Custom hooks for reusable logic
const useDesignerFilters = () => {
  const [filters, setFilters] = useState({})
  // Filter logic
  return { filters, setFilters, filteredDesigners }
}
```

### Service Layer (Future)
```typescript
// API abstraction layer
export const designerService = {
  getAll: () => api.get('/designers'),
  getById: (id: string) => api.get(`/designers/${id}`),
  create: (data: Designer) => api.post('/designers', data),
}
```

## Testing Strategy (Ready to Implement)

### Unit Tests
- **Components**: React Testing Library
- **Utilities**: Jest unit tests
- **Hooks**: React Hooks Testing Library

### Integration Tests
- **User Flows**: Cypress or Playwright
- **API Integration**: Mock Service Worker
- **Visual Regression**: Chromatic or similar

### Test File Structure
```
src/
├── components/
│   ├── DesignerCard.tsx
│   └── __tests__/
│       └── DesignerCard.test.tsx
└── utils/
    ├── formatDate.ts
    └── __tests__/
        └── formatDate.test.ts
```

## Future Architecture Considerations

### Backend Integration
- **API Routes**: Ready for REST or GraphQL
- **Authentication**: Auth0 or similar integration
- **Database**: PostgreSQL schema prepared

### State Management Evolution
- **Global State**: Redux Toolkit for complex state
- **Server State**: React Query for API data
- **Local State**: Zustand for simple global state

### Microservices Ready
- **Service Separation**: Clear component boundaries
- **API Gateway**: Ready for service composition
- **Independent Deployment**: Component-based architecture
