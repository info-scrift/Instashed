#!/bin/bash

# 🚀 InstaShed Deployment Setup Script
# This script helps you prepare your environment for deployment

echo "🚀 Setting up InstaShed for deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Create .env file from template
if [ ! -f "server/.env" ]; then
    echo "📝 Creating .env file from template..."
    cp server/env-config.txt server/.env
    echo "✅ Created server/.env file"
    echo "⚠️  Please edit server/.env with your actual values!"
else
    echo "✅ .env file already exists"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

# Test the production server
echo "🧪 Testing production server..."
echo "Starting server on http://localhost:5001"
echo "Press Ctrl+C to stop the server"
echo ""

npm start

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit server/.env with your actual values"
echo "2. Push your code to GitHub"
echo "3. Deploy to your chosen platform (Vercel, Railway, Render)"
echo "4. Add your custom domain"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions" 