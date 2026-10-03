# Activity Management System (fyp-project)

An activity management system for any organisation: plan activities, collect a report after each one and route it through an approval chain. This is the Angular front end for members, reviewers and admins, backed by an HTTP API.

## Requirements

- Node.js 22.22+, 24.15+ or 26+
- The backend API (see "Backend URL" below)

## Stack

- Angular 22 (NgModule-based, esbuild `@angular/build` builder), TypeScript 6
- Angular Material 22 (Material 3 theme in `src/styles.scss`), Chart.js 4
- Shared UI lives in `src/app/shared`: the page shell, the dialog service and the Material module

## Branding

The app name, roles and report statuses are set in `src/app/shared/app-config.ts`.

## Backend

`docs/API.md` lists every endpoint, role and report status the backend must provide.

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
