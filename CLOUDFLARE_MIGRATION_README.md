# Shivam Speciality Dental Care — Cloudflare Pages preparation

This is a prepared copy of the GitHub repository. The original project is not modified.

## Changes made

- Added `frontend/public/_redirects` for React Router single-page-app route fallback on Cloudflare Pages.
- Removed the Emergent browser script from `frontend/public/index.html`.
- Removed the development-only `@emergentbase/visual-edits` dependency. The CRACO config already treats that package as optional when absent.
- Added `prepare_assets.py` and `PREPARE_ASSETS_WINDOWS.bat` to copy media currently hosted on `customer-assets.emergentagent.com` into `frontend/public/assets` and rewrite references.
- Kept the backend folder as an archive; current frontend source appears not to call the FastAPI endpoints.

## Required before production deployment

**Run the asset migration script first.** Clinic images and a video are currently hosted on Emergent and are not embedded in this ZIP. The script downloads them from their existing URLs on a computer with internet access and updates source references.

On Windows:
1. Extract this ZIP.
2. Open the extracted `My-Website-main` folder.
3. Double-click `PREPARE_ASSETS_WINDOWS.bat` (requires Python 3 available as `py` or `python`).
4. Confirm it reports all assets downloaded. If any fail, do not cancel Emergent hosting; resolve those URLs first.
5. Commit/push the updated folder to GitHub, or upload the prepared project to a new repository.

## Cloudflare Pages settings

- Framework preset: Create React App (or None if unavailable)
- Production branch: `main` (confirm your default branch)
- Root directory: `frontend`
- Build command: `yarn build`
- Build output directory: `build`

There is no lockfile in the supplied ZIP. If Yarn install fails, set install command to `npm install` and build command to `npm run build`.

## Important checks and limitations

- This package has not been built or tested in a network-enabled build environment here.
- Behold Instagram widget and PostHog analytics remain third-party integrations and require those services to remain available.
- Backend and MongoDB are retained for reference, not deployed by Cloudflare Pages. Reassess if future features need server-side storage.
- Verify WhatsApp links, all pages, images/video, mobile layout, metadata, analytics, and direct URL refreshes on the `pages.dev` preview before connecting your custom domain or cancelling Emergent.
- Never upload `.env` files, credentials, or database connection strings to GitHub.
