# Career Companion Frontend - Day 02

## Objective

The objective of Day 02 was to build a complete frontend authentication module integrated with the NestJS backend.

Unlike Day 01 which focused on project setup, this day focused on implementing production-ready authentication architecture rather than only designing UI screens.

---

# Completed Features

## Authentication UI

- Login Page
- Register Page
- Responsive Authentication Layout
- Modern SaaS inspired design
- Poppins font integration
- Password visibility toggle
- Dashboard placeholder page

---

## Authentication Logic

Implemented complete login flow including:

- React Hook Form
- Zod validation
- Axios API integration
- Zustand state management
- JWT storage
- Session restoration
- Protected routes
- Logout functionality
- Toast notifications

---

# Folder Structure

```
frontend
│
├── app
│   ├── login
│   ├── register
│   ├── dashboard
│   ├── layout.tsx
│   └── providers.tsx
│
├── components
│   ├── auth
│   │   ├── auth-layout.tsx
│   │   ├── login-form.tsx
│   │   ├── register-form.tsx
│   │   └── protected-route.tsx
│   │
│   └── ui
│
├── hooks
│   └── use-login.ts
│
├── lib
│   └── axios.ts
│
├── providers
│   └── auth-provider.tsx
│
├── schemas
│   ├── login.schema.ts
│   └── register.schema.ts
│
├── services
│   └── auth.service.ts
│
├── store
│   └── auth-store.ts
│
└── types
    └── auth.types.ts
```

---

# Libraries Used

## UI

- Next.js
- Tailwind CSS
- Shadcn UI
- Lucide Icons

---

## Forms

- React Hook Form
- Zod
- @hookform/resolvers

---

## State Management

- Zustand

---

## API

- Axios

---

## Notifications

- Sonner

---

# Authentication Architecture

Authentication follows a layered architecture.

```
UI

↓

Hooks

↓

Services

↓

Axios Client

↓

Backend API
```

Business logic is separated from UI.

Components only render data.

Hooks manage:

- validation
- loading
- API calls
- routing
- toast notifications

Services communicate with backend.

Axios manages HTTP configuration.

---

# Login Flow

```
User

↓

Enter Credentials

↓

React Hook Form

↓

Zod Validation

↓

POST /api/auth/login

↓

NestJS Backend

↓

Receive

accessToken

user

↓

Zustand Store

↓

localStorage

↓

Dashboard
```

---

# Session Restore Flow

```
Application Starts

↓

AuthProvider

↓

Read localStorage

↓

Restore Zustand

↓

Protected Route

↓

Dashboard
```

---

# Protected Route Flow

```
Open Dashboard

↓

Is Session Initialized?

↓

YES

↓

Is Authenticated?

↓

YES

↓

Dashboard

NO

↓

Login
```

---

# Zustand Store

Store manages

- accessToken
- user
- authentication state
- restore session
- logout

Store Responsibilities

- Hold authentication state
- Login
- Logout
- Restore session

---

# Axios Configuration

Axios instance includes

- Base URL
- JSON headers
- Authorization header interceptor
- Response interceptor

Future improvements

- Refresh Token
- Automatic Token Refresh
- Global Error Handling

---

# Backend Contract

## Register

Request

```
POST /api/auth/register
```

Response

```
{
    id,
    name,
    email,
    createdAt
}
```

---

## Login

Request

```
POST /api/auth/login
```

Response

```
{
    accessToken,
    user
}
```

---

# Important Architectural Decisions

## 1

Business logic moved into custom hooks.

Reason

Keeps UI components clean.

---

## 2

Services communicate with backend.

Reason

Avoid API calls inside components.

---

## 3

Authentication stored in Zustand.

Reason

Global state accessible from entire application.

---

## 4

JWT stored in localStorage.

Reason

Allows session persistence after refresh.

---

## 5

AuthProvider restores session.

Reason

Maintains authentication state after browser refresh.

---

## 6

ProtectedRoute controls page access.

Reason

Centralized route protection.

---

# Challenges Faced

## Shadcn Form

Latest Shadcn CLI did not generate

components/ui/form.tsx

Solution

Used React Hook Form directly without relying on generated wrapper components.

---

## CORS

Frontend could not communicate with backend.

Solution

Enabled CORS inside NestJS.

---

## API Base URL

Initially frontend was calling incorrect URL.

Solution

Updated

NEXT_PUBLIC_API_URL

to backend URL.

---

# Testing Completed

Login

PASS

Register UI

PASS

JWT Storage

PASS

Session Restore

PASS

Protected Route

PASS

Logout

PASS

Dashboard Redirect

PASS

---

# Current Status

Frontend Authentication Module is complete.

Ready to start Dashboard Module.

---

# Next Day Goal

Dashboard Module

- Dashboard Layout
- Sidebar
- Top Navigation
- User Menu
- Logout Position
- Responsive Layout
- Route Groups