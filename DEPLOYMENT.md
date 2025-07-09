# 🚀 Deployment Guide for InstaShed

## ✅ API URLs - Already Fixed!

**Good news!** Your API URLs are already configured correctly for production:

- ✅ **Contact Form**: Uses `/api/contact` (relative path)
- ✅ **Quote Form**: Uses `/api/quote` (relative path)
- ✅ **Vite Proxy**: Configured for development (`localhost:5001`)
- ✅ **Production**: Express serves both frontend and API on same domain

**How it works:**
- **Development**: Vite proxy forwards `/api/*` to `localhost:5001`
- **Production**: Express serves React frontend and handles API routes on same port

## 🌐 Custom Domain Deployment

### Step 1: Environment Variables Setup

1. **Create `.env` file** in the `server/` folder:
   ```bash
   # Copy from server/env-config.txt
   cp server/env-config.txt server/.env
   ```

2. **Update the `.env` file** with your domain:
   ```env
   # Replace with your actual domain
   API_BASE_URL=https://your-domain.com
   FRONTEND_URL=https://your-domain.com
   BACKEND_URL=https://your-domain.com
   CORS_ORIGIN=https://your-domain.com
   ALLOWED_ORIGINS=https://your-domain.com,https://www.your-domain.com
   ```

### Step 2: Deploy to Platform

#### Option A: Vercel (Recommended)
1. **Push to GitHub**
2. **Go to [vercel.com](https://vercel.com)**
3. **Import repository**
4. **Configure build settings**:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
5. **Add Environment Variables** (from your `.env` file)
6. **Deploy**
7. **Add Custom Domain**:
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records as instructed

#### Option B: Railway
1. **Deploy from GitHub**
2. **Add Environment Variables**
3. **Add Custom Domain**:
   - Go to Settings → Domains
   - Add your domain
   - Configure DNS

#### Option C: Render
1. **Create Web Service**
2. **Connect GitHub**
3. **Configure**:
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
4. **Add Environment Variables**
5. **Add Custom Domain**:
   - Go to Settings → Domains
   - Add your domain

### Step 3: DNS Configuration

**For your domain registrar, add these records:**

```
Type: CNAME
Name: @ (or your subdomain)
Value: your-app.vercel.app (or your platform URL)
TTL: 3600
```

**Or for A record:**
```
Type: A
Name: @
Value: [Platform IP Address]
TTL: 3600
```

## 📧 Email Setup

### Gmail App Password
1. **Go to [Google Account Settings](https://myaccount.google.com/)**
2. **Security** → **2-Step Verification** (enable)
3. **Security** → **App passwords**
4. **Generate** app password for "Mail"
5. **Add to `.env`**:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-char-app-password
   ADMIN_EMAIL=where-to-receive-emails@example.com
   ```

## 🔧 Environment Variables Reference

### Required for Production:
```env
NODE_ENV=production
PORT=5001
API_BASE_URL=https://your-domain.com
FRONTEND_URL=https://your-domain.com
CORS_ORIGIN=https://your-domain.com
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
ADMIN_EMAIL=admin@instashed.com
```

### Optional (for additional features):
```env
# Database
DATABASE_URL=your-database-url

# Security
SESSION_SECRET=your-super-secret-key
JWT_SECRET=your-jwt-secret

# Analytics
GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX-X

# File Storage
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
AWS_S3_BUCKET=your-bucket-name
```

## 🚀 Local Testing Before Deploy

```bash
# Navigate to project directory
cd InstaShed-main/InstaShed-main

# Install dependencies
npm install

# Build the project
npm run build

# Start production server
npm start

# Test at http://localhost:5001
```

## 📁 Project Structure After Build

```
dist/
├── public/          # React frontend (served by Express)
│   ├── index.html
│   ├── assets/
│   └── ...
└── index.js         # Express backend
```

## 🔍 Troubleshooting

### Email Not Working
- ✅ Check environment variables are set correctly
- ✅ Verify Gmail app password is correct
- ✅ Check if 2FA is enabled on Gmail account

### Build Fails
- ✅ Run `npm install` first
- ✅ Check for TypeScript errors: `npm run check`
- ✅ Ensure all dependencies are in package.json

### Port Issues
- ✅ Set `PORT` environment variable
- ✅ Default port is 5001
- ✅ Some platforms auto-assign ports

### API Calls Not Working
- ✅ API URLs are already relative (`/api/contact`, `/api/quote`)
- ✅ No hardcoded localhost URLs remain
- ✅ Express serves both frontend and API in production

### Custom Domain Issues
- ✅ Check DNS records are correct
- ✅ Verify SSL certificate is active
- ✅ Ensure CORS origins include your domain
- ✅ Check platform-specific domain settings

## 🌍 Platform-Specific Notes

### Vercel
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Automatic deployments from Git
- ✅ Custom domains with SSL

### Railway
- ✅ Full-stack deployment
- ✅ Database integration
- ✅ Custom domains
- ✅ Environment variable management

### Render
- ✅ Free tier available
- ✅ Custom domains
- ✅ Automatic deployments
- ✅ SSL certificates

## 📞 Support

If you encounter issues:
1. ✅ Check the deployment platform logs
2. ✅ Verify environment variables
3. ✅ Test locally first with `npm run build && npm start`
4. ✅ Check DNS propagation (can take 24-48 hours)
5. ✅ Verify SSL certificate status 