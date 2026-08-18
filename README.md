# Career Companion Frontend

## Overview

Career Companion is a career management platform for tracking projects, job applications, interviews, resumes, notes, resources, and interview preparation. This repository contains the Next.js frontend for the MVP.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui, Radix UI
- **State:** Zustand (auth), TanStack React Query (server state)
- **Forms:** React Hook Form + Zod
- **HTTP:** Axios

## Features

- User authentication (login and register)
- Dashboard with summary stats and recent activity
- Projects, applications, interviews, resources, resumes, and notes management
- Interview questions module
- Responsive sidebar navigation with mobile drawer
- Loading, error, and empty states across modules
- CRUD flows for all MVP modules

## Requirements

- Node.js 20+
- npm
- Running Career Companion backend API

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create environment file:

```bash
cp .env.example .env.local
```

3. Set the API URL in `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

4. Start the development server:

```bash
npm run dev
```

The app runs at [http://localhost:3001](http://localhost:3001) by default.

## Environment Variables

| Variable | Description | Example |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Backend API base URL (include `/api`) | `http://localhost:3000/api` |

For production, set `NEXT_PUBLIC_API_URL` to your deployed backend URL, for example:

```env
NEXT_PUBLIC_API_URL=https://your-backend.example.com/api
```

Do not commit `.env.local` or any file containing real secrets.

## Development

```bash
npm run dev
```

## Lint

```bash
npm run lint
```

## Production Build

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_API_URL` in your deployment environment before building or running the production server.

## Project Structure

```text
app/
  (auth)/          # Login and register pages
  (protected)/     # Authenticated app routes
components/        # UI and feature components
constants/         # Navigation and shared constants
hooks/             # React Query hooks and form hooks
lib/               # Axios client, utilities, query client
providers/         # Auth provider
schemas/           # Zod validation schemas
services/          # API service layer
store/             # Zustand stores
types/             # TypeScript types
```

## Backend Requirement

This frontend expects a compatible Career Companion backend API. All requests are sent through the shared Axios instance in `lib/axios.ts` using `NEXT_PUBLIC_API_URL`.

Authentication endpoints:

- `POST /auth/login`
- `POST /auth/register`

Protected module endpoints are consumed via the service files in `services/`.

## Current MVP Modules

- Authentication
- Dashboard
- Projects
- Applications
- Interviews
- Resources
- Resumes
- Notes
- Interview Questions
- Responsive navigation
