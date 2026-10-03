# PMFKIAMS (fyp-project)

PMFKI activity management system: an Angular front end for students, lecturers and admins, backed by an HTTP API.

## Requirements

- Node.js 22.22+, 24.15+ or 26+
- The backend API (see "Backend URL" below)

## Stack

- Angular 22 (NgModule-based, esbuild `@angular/build` builder), TypeScript 6
- Ionic 8 (`@ionic/angular`), Bootstrap 5, Chart.js 4

## Development server

```
npm install
npm start
```

Then open `http://localhost:4200/`. The app reloads when source files change.

## Backend URL

The base URL of the backend API is set once, as `apiUrl`, in:

- `src/environments/environment.ts` (development)
- `src/environments/environment.prod.ts` (production builds)

Set the production value to the deployed backend before running `npm run build`.

## Build

`npm run build` writes the production build to `dist/fyp-project/browser`.

## Running unit tests

`npm test` runs the unit tests with Karma in Chrome. For a single headless run:

```
npx ng test --watch=false --browsers=ChromeHeadless
```

Shared TestBed setup for the specs lives in `src/testing/test-setup.ts`.
