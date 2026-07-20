# KidsMUA Frontend

Angular 20 standalone frontend for **Mind Unlocking Academy – Christian Edition** — “No Reader Left Behind: Christian Literacy & Encouragement Campaign.”

## Run locally

```bash
npm ci
npm start
```

## Scripts

- `npm run typecheck`
- `npm run lint`
- `npm run test`
- `npm run build:production`
- `npm run e2e:smoke`

## Dependency lockfile

`package-lock.json` is committed so GitHub Actions `setup-node` can restore the npm cache and CI can use deterministic `npm ci` installs.

## Backend endpoints required

Auth (`/api/v1/auth/*`), students, learning sessions, onboarding, consent, curriculum, assessments, progress, stars, badges, rewards, donations, encouragement, notifications, certificates, reports, safeguarding, files, and admin endpoints.
