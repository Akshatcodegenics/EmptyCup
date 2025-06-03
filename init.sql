
-- Database initialization script
-- This file will be executed when the PostgreSQL container starts for the first time

-- Create extensions if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables for future backend integration
CREATE TABLE IF NOT EXISTS designers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty VARCHAR(255) NOT NULL,
    experience VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    rating DECIMAL(3,2) DEFAULT 0,
    projects INTEGER DEFAULT 0,
    image VARCHAR(255),
    skills TEXT[],
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO designers (name, specialty, experience, location, rating, projects, image, skills) VALUES
('Sarah Johnson', 'UI/UX Designer', '5+ years', 'San Francisco, CA', 4.9, 127, '/placeholder.svg', ARRAY['Figma', 'Sketch', 'Adobe XD', 'Prototyping']),
('Mike Chen', 'Product Designer', '3+ years', 'New York, NY', 4.8, 89, '/placeholder.svg', ARRAY['Design Systems', 'User Research', 'Wireframing', 'Figma']),
('Emily Rodriguez', 'Visual Designer', '4+ years', 'Los Angeles, CA', 4.7, 156, '/placeholder.svg', ARRAY['Branding', 'Illustration', 'Typography', 'Adobe Creative Suite'])
ON CONFLICT DO NOTHING;
