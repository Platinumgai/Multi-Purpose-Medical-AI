# Multi-Purpose Medical AI

A Vite + React + TypeScript medical assistant UI with authentication, role-based dashboards, symptom checking, AI predictions, medical records, and appointment booking flows.

## Features

- Landing page and authentication screens
- Role-based dashboards for patients, doctors, and admins
- Symptom checker workflow
- AI prediction interface
- Medical records management view
- Appointment booking flow
- Responsive UI built with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

## Project Structure

- `src/components` - UI components for the landing page, auth flow, and app features
- `src/components/dashboards` - Role-specific dashboards
- `src/contexts` - Authentication context and related state
- `src/types` - Shared TypeScript types

## Notes

- Authentication and dashboard behavior are implemented in the UI layer for demo purposes.
- Update the auth context and feature components if you want to connect the app to a backend or API.
